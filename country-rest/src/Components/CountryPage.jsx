import React from "react";

export default function CountryPage( { country, onBack } ) {
    return(
        <>
            <div className="">
                <button onClick={onBack}>Go Back</button>
                <h1>{country.name}</h1>
            </div>
        </>
    )
}