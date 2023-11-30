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
                className="bg-white dark:bg-gray-700 p-2 mg-2 text-xs dark:text-gray-400 w-max cursor-pointer 
                hover:scale-125 hover:bg-gray-300 hover:text-gray-700
                shadow-md">
                    {c.name}
            </div>
        )
    }) 

    return(
        <>
            <div className="flex flex-col justify-start items-start px-16 h-128">
                <div className="">
                    <button 
                    className="relative mt-16 shadow-md dark:bg-gray-700 py-1 pr-4 pl-12 hover:scale-125 hover:bg-gray-300
                     hover:text-gray-700 rounded-md bg-white text-gray-700 dark:text-white" 
                    onClick={onBack}>
                    <svg className="w-9 h-9 absolute left-2 top-[-2px] text-gray-300 fill-black dark:fill-white"  viewBox="0 0 24 24" id="left-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" ><path id="primary" d="M21,11H5.41l1.3-1.29A1,1,0,0,0,5.29,8.29l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"></path></svg>
                    Go Back</button>
                </div>
                <div className="flex justify-center items-center gap-16 mt-8 flex-col sm:flex-row text-gray-800 dark:text-gray-200  ">
                    <img src={country.flags.png} alt={`${country.name} flag`}/>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{country.name}</h1>
                        <div>
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
                         { countryBorder ? <div className="mt-10 flex items-center gap-4 flex-wrap gap-15">
                            Border Countries: {borderedCountry}
                        </div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}