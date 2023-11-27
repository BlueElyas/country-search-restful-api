import React, { useEffect, useState } from "react";

export default function Card( { data, searchInput } ) {
    // const [search, setSearch] = useState(' ')

    console.log(data.filter(e => {
        if(e.type){
            return e
        }
    }))

    const mappedElement = (newData) => newData.map((element, index) => {
        return (
                <div 
                    className="bg-gray-700 text-white flex 
                    flex-col justify-center rounded-lg mt-6  ml-16 cursor-pointer w-1/5" 
                    key={index}      
                >
                    <img className=" rounded-t-lg w-full h-1/2" src={element.flags.png} onClick={() => <Card/>}/>
                    <div className=" px-4 h-full flex flex-col py-2">
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


    const filteredData = data.filter(e => {
        if (searchInput === '') {
            return e
        }else {
            return e.name.toLowerCase().includes(searchInput)
        }
    })



    return(
        <>
            { searchInput ? mappedElement(filteredData) : mappedElement(data)}
            
        </>
    )

}