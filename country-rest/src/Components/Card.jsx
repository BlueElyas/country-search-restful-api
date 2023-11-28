import React from "react";

export default function Card( { data, searchInput, regionData } ) {

    const mappedElement = (newData) => newData.map((element, index) => {
        return (
                <div 
                    className="bg-gray-700 text-white flex 
                    flex-col justify-center rounded-lg mt-6  ml-16 cursor-pointer" 
                    key={index}      
                >
                    <img className=" rounded-t-lg w-full h-1/2" src={element.flags.png}/>
                    <div className=" px-4 h-1/2 flex flex-col py-2">
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

    const mappedRegionData =[...new Set(regionData.map(e=>e.region))]

    const filteredData = data.filter(e => {
        const eVariable = e.name.toLowerCase().includes(searchInput.toLowerCase())
        const eRegion = mappedRegionData[0] ? e.region === mappedRegionData[0] : true

        if (searchInput === '' && !eRegion) {
            return true
        } else {
            return eVariable && eRegion
        }
    })

 const render = searchInput ? mappedElement(filteredData) : regionData.length > 0 && mappedElement(regionData) || mappedElement(data)


    return(
        <>
            { render }
        </>
    )

}