import React, { useEffect, useState } from "react";
import data from '../../data.json/'
import Card from "./Card";


export default function CountryCards() {
    const [searchElement, setSearchElement] = useState('')
    
    const handleChange = e => {
        setSearchElement(e.target.value.toLowerCase())
    }
    return(
        <>
        <div className="bg-gray-800 min-h-[85%]">
            <div className=" px-24 pt-4 pb-2">
                <input 
                    type="text" 
                    className="bg-gray-700 rounded-sm py-2 px-8 w-1/2 placeholder:items-start text-gray-200" 
                    placeholder="Search for a country..." 
                    value={searchElement}
                    onChange={handleChange}
                />
            </div>
            <div className=" flex flex-wrap px-8 pb-16">  
                {<Card data={data} searchInput={searchElement}/>}           
            </div>
        </div>
        </>
    )
}

// Create a controlled element
// if state is positive, filter out countries with name exactly like the search