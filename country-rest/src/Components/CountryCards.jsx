import React, { useState } from "react";
import data from '../../data.json/'


export default function CountryCards() {
    const [searchElement, setSearchElement] = useState('')
    const formattedData = data.map((element, index) => {
        return (
                <div className="bg-gray-700 text-white flex flex-col justify-center rounded-lg mt-8 w-autos h-80 ml-16 " key={index}>
                    <img className=" rounded-t-lg w-64 h-1/2" src={element.flags.png} alt="" />
                    <div className="p-4 h-1/2 flex flex-col">
                        <h5 className="my-4 font-bold ">{element.name}</h5>
                        <ul>
                            <li>Population: <span className="text-gray-300"> {element.population}</span></li>
                            <li>Region: <span className="text-gray-300"> {element.region}</span></li>
                            <li>Capital: <span className="text-gray-300"> {element.capital}</span></li>
                        </ul>
                    </div>
                </div>
        )
    })

    const handleChange = e => {
        setSearchElement(e.target.value)
    }
    return(
        <>
            <div className="bg-gray-800 px-24 py-8 ">
                <input 
                    type="text" 
                    className="bg-gray-700 rounded-sm py-2 px-8 w-1/2 placeholder:items-start" 
                    placeholder="Search for a country..." 
                    value={searchElement}
                    onChange={handleChange}
                />
            </div>
            <div className="bg-gray-800 flex flex-wrap px-8">  
                {formattedData}           
            </div>
        </>
    )
}

// Create a controlled element
// if state is positive, filter out countries with name exactly like the search