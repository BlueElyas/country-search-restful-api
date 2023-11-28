import React from "react";

export default function CountryPage( { country, onBack, data, changeCountry } ) {
    const languages = country.languages.map(e => e.name).join(', ')

    const countryBorder = country.borders && country.borders.length > 0 ? country.borders : null

    const borderedCountryArray = countryBorder ?  data.filter(c => {
            for (let i = 0; i < countryBorder.length; i++) {
                if (c.alpha3Code === countryBorder[i])
                return c.name
            }
    }) : []
    

    const borderedCountry = borderedCountryArray.map((c, index) => {
        return(
            <div 
                onClick={() => changeCountry(c)}  
                key={index} 
                className="bg-gray-700 p-2 mg-2 text-xs text-gray-400 w-max cursor-pointer hover:scale-125 hover:bg-gray-300 hover:text-gray-700">
                    {c.name}
            </div>
        )
    }) 

    return(
        <>
            <div className="text-gray-200 flex flex-col justify-start items-start px-16 h-128">
                <button className="mt-16 shadow-md bg-gray-700 py-1 px-4 hover:scale-125 hover:bg-gray-300 hover:text-gray-700" onClick={onBack}> Go Back</button>
                <div className="flex justify-center items-center gap-16 mt-8 sm:flex-col">
                    <img src={country.flags.png} alt={`${country.name} flag`}/>
                    <div className="">
                        <h1 className="text-2xl font-bold mb-4">{country.name}</h1>
                        <div className="">
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                                <li>Native Name: <span className="text-gray-400">{country.altSpellings ? country.altSpellings[0] : null}</span></li>
                                <li>Population: <span className="text-gray-400">{country.population.toLocaleString()}</span></li>
                                <li>Region: <span className="text-gray-400">{country.region}</span></li>
                                <li>Sub Region: <span className="text-gray-400">{country.subregion}</span></li>
                                <li>Capital: <span className="text-gray-400">{country.capital}</span></li>
                                <li>Top Level Domain: <span className="text-gray-400">{country.topLevelDomain.join('')}</span></li>
                                <li>Currencies: <span className="text-gray-400">{country.currencies ? country.currencies[0].name : null}</span></li>
                                <li>Languages: <span className="text-gray-400">{languages}</span></li>
                            </ul>
                        </div>
                         { countryBorder ? <div className="mt-10 flex items-center gap-4 flex-wrap">
                            Border Countries: {borderedCountry}
                        </div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}