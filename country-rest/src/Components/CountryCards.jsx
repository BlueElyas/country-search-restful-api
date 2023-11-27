import React, { useState } from "react";
import data from '../../data.json/'


export default function CountryCards() {
    const [searchElement, setSearchElement] = useState('')
    const formattedData = data.map(element => {
        return (
                <div className="bg-gray-700 text-white flex flex-col justify-center rounded-lg mt-8 w-autos h-80 ml-16">
                    <img className=" rounded-t-lg w-64 h-1/2" src={element.flags.png} alt="" />
                    <div className="p-4 h-1/2">
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
            <div className="bg-gray-800 px-24 py-8">
                <input 
                    type="text" 
                    className="bg-gray-700 rounded-sm py-2 px-8 w-1/2 placeholder:items-start relative" 
                    placeholder="Search for a country..." 
                />
                <svg className="absolute r-0" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <div className="bg-gray-800 flex flex-wrap px-8">  
                {formattedData}           
            </div>
        </>
    )
}

// Create a controlled element
// if state is positive, filter out countries with name exactly like the search