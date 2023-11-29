import React, { useState, useEffect } from "react";
import data from '../../data.json/'
import Card from "./Card";


export default function CountryCards( { countryData } ) {
    const [searchElement, setSearchElement] = useState('')
    const [region, setRegion] = useState('')
    const [renderInput, setRenderInput] = useState(true)
    

    const handleChange = e => {
        setSearchElement(e.target.value.toLowerCase())
    }


    console.log(countryData)


    const regionTypes = data.map(data => data.region)
    
    const uniqRegions = [...new Set(regionTypes)]
    const mappedRegion = uniqRegions.map((region, index) => {
                return(
                    <option key={index} value={`${region}`}>{region}</option>
                )
            })
    
    const regionData = data.filter(d => d.region === region)
    console.log(regionData)

    return(
        <>
        <div className="bg-gray-100 dark:bg-gray-800 min-h-[85%]">
            <div className=" px-4 pt-4 pb-2 flex justify-between gap-4 sm:px-12 flex-col items-start sm:flex-row mx-8 sm:mx-0">
                {renderInput ? 
                <div className="relative"> 
                    <svg 
                        className="w-8 h-8 absolute top-3 left-2 sm:bottom-5 sm:left-5 " 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" 
                        stroke="#000000" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                    </svg>
                    <input 
                        type="text" 
                        className="bg-white text-gray-700 dark:bg-gray-700 rounded-sm py-4 px-12 pr-16
                        dark:text-gray-200 sm:px-16 shadow-md w-" 
                        placeholder="Search for a country..." 
                        value={searchElement}
                        onChange={handleChange}
                        />
                    </div> : null}
                {renderInput ? <select 
                    name="region-select" 
                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold 
                    cursor-pointer py-4 px-8 shadow-md mt-6 sm:mt-0"  
                    onChange={(e) => setRegion(e.target.value)}
                    >
                        <option value=''>Filter by region</option>
                        {mappedRegion}
                    </select>: null
                }
            </div>
            <div className="flex flex-wrap px-4 pb-16">  
                {<Card data={data} searchInput={searchElement} regionData={regionData} setRenderInput={setRenderInput} apiData={countryData}/>}           
            </div>
        </div>
        </>
    )
}

// Create a controlled element
// if state is positive, filter out countries with name exactly like the search

