import React, { useState } from "react";
import data from '../../data.json/'
import Card from "./Card";


export default function CountryCards() {
    const [searchElement, setSearchElement] = useState('')
    const [region, setRegion] = useState('')
    const [renderInput, setRenderInput] = useState(true)
    
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
            <div className=" px-4 pt-4 pb-2 flex justify-between ">
                {renderInput ? <input 
                    type="text" 
                    className="bg-gray-700 rounded-sm py-2 px-3 text-gray-200" 
                    placeholder="Search for a country..." 
                    value={searchElement}
                    onChange={handleChange}
                /> : null}
                 {renderInput ? <select 
                    name="region-select" 
                    className="bg-gray-700 px-1 text-gray-200 font-bold cursor-pointer"  
                    onChange={(e) => setRegion(e.target.value)}
                >
                    <option value=''>Filter by region</option>
                    {regionTypes}
                </select>: null}
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