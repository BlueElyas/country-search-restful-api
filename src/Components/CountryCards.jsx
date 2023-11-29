import React, { useState } from "react";
import data from '../../data.json/'
import Card from "./Card";


export default function CountryCards() {
    const [searchElement, setSearchElement] = useState('')
    const [region, setRegion] = useState('')
    const [renderInput, setRenderInput] = useState(true)
    // const [countryData, setCountryData] = useState(null)
    
    const handleChange = e => {
        setSearchElement(e.target.value.toLowerCase())
    }

    const regionTypes = Array.from(
        new Set(data.map(d => d.region)) 
            ).map((region, index) => {
                return(
                    <option key={index} value={`${region}`}>{region}</option>
                )
            })

    const regionData = data.filter(d => d.region === region)

    return(
        <>
        <div className="bg-gray-800 min-h-[85%]">
            <div className="relative px-4 pt-4 pb-2 flex justify-between gap-4 sm:px-12 flex-col items-start sm:flex-row ">
                {renderInput ? <div className=""> 
                <svg className="w-8 h-8 absolute bottom-7 left-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input 
                    type="text" 
                    className="bg-gray-700 rounded-sm py-2 px-3 text-gray-200 self-stretch sm:self-start sm:px-16" 
                    placeholder="Search for a country..." 
                    value={searchElement}
                    onChange={handleChange}
                    /></div> : null}
                {renderInput ? <select 
                    name="region-select" 
                    className="bg-gray-700 text-gray-200 font-bold cursor-pointer py-4 px-8"  
                    onChange={(e) => setRegion(e.target.value)}
                    >
                    <option value=''>Filter by region</option>
                    {regionTypes}
                    </select>: null
                }
            </div>
            <div className="flex flex-wrap px-8 pb-16">  
                {<Card data={data} searchInput={searchElement} regionData={regionData} setRenderInput={setRenderInput}/>}           
            </div>
        </div>
        </>
    )
}

// Create a controlled element
// if state is positive, filter out countries with name exactly like the search