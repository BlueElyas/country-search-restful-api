import React from "react";

export default function Card( {data} ) {
    return  data.map((element, index) => {
        return (
                <div 
                    className="bg-gray-700 text-white flex 
                    flex-col justify-center rounded-lg mt-8 h-80 ml-16 cursor-pointer w-1/4" 
                    key={index}      
                >
                    <img className=" rounded-t-lg w-64 h-1/2" src={element.flags.png} alt="" onClick={() => <Card/>}/>
                    <div className="px-4  h-1/2 flex flex-col">
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

}