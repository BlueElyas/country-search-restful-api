import React from "react";

export default function CountryPage( { country, onBack, data } ) {
    const languages = country.languages.map(e => e.name).join(', ')
    console.log(country)
    return(
        <>
            <div className="text-gray-200">
                <button onClick={onBack}>Go Back</button>
                <div className="flex justify-center items-center gap-16 mt-8">
                    <img src={country.flags.png} alt="" />
                    <div className="">
                        <h1 className="text-2xl font-bold mb-4">{country.name}</h1>
                        <div className="">
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                                <li>Native Name: <span className="text-gray-400">{country.altSpellings[1]}</span></li>
                                <li>Population: <span className="text-gray-400">{country.population.toLocaleString()}</span></li>
                                <li>Region: <span className="text-gray-400">{country.region}</span></li>
                                <li>Sub Region: <span className="text-gray-400">{country.subregion}</span></li>
                                <li>Capital: <span className="text-gray-400">{country.capital}</span></li>
                                <li>Top Level Domain: <span className="text-gray-400">{country.topLevelDomain.join('')}</span></li>
                                <li>Currencies: <span className="text-gray-400">{country.currencies[0].name}</span></li>
                                <li>Languages: <span className="text-gray-400">{languages}</span></li>
                            </ul>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}