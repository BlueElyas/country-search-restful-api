import React from "react";
import data from '../../data.json/'


export default function CountryCards() {
    const afghanistan = data.filter(d => d.name.toLowerCase() === 'afghanistan')
    const formattedData = data.map((element, index) => {
        return (
                <div className="bg-gray-600 text-white flex flex-col justify-center rounded-lg mt-16 w-64">
                    <img className=" rounded-t-lg w-64 " src={element.flags.png} alt="" />
                    <div className="p-4 mb-4">
                        <h5 className="my-4 font-bold">{element.name}</h5>
                        <ul>
                            <li>Population: <span className="text-gray-300"> {element.population}</span></li>
                            <li>Region: <span className="text-gray-300"> {element.region}</span></li>
                            <li>Capital: <span className="text-gray-300"> {element.capital}</span></li>
                        </ul>
                    </div>
                </div>
        )
    })
    return(
        <>
            <div className="bg-gray-800 flex flex-wrap  items-start justify-around">
                {formattedData}           
            </div>
        </>
    )
}