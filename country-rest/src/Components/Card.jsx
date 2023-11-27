import React, { useState } from "react";

export default function Card( { data, searchInput } ) {

    console.log(searchInput)

    const mappedElement = (newData) => newData.map((element, index) => {
        return (
                <div 
                    className="bg-gray-700 text-white flex 
                    flex-col justify-center rounded-lg mt-8 h-80 ml-16 cursor-pointer w-1/5" 
                    key={index}      
                >
                    <img className=" rounded-t-lg w-full h-1/2" src={element.flags.png} onClick={() => <Card/>}/>
                    <div className=" px-4 h-1/2 flex flex-col">
                        <h5 className="my-4 font-bold w-3/4">{element.name}</h5>
                        <ul className="w-full ">
                            <li>Population: <span className="text-gray-300"> {element.population}</span></li>
                            <li>Region: <span className="text-gray-300"> {element.region}</span></li>
                            <li>Capital: <span className="text-gray-300"> {element.capital}</span></li>
                        </ul>
                    </div>
                </div>
        )
    })

    const filteredElements = data.filter((element, index) => {
        return element.name.toLowerCase().trim() === searchInput.toLowerCase().trim()
    })

    return(
        <>
            {searchInput ?  mappedElement(filteredElements) : mappedElement(data)}
        </>
    )

}