import React from "react";

export default function Header() {
    return(
        <>
            <div className="bg-gray-600 text-white flex justify-between py-4 px-8">
                <h1 className="font-bold text-xl">Where in the world?</h1>
                <button>Dark Mode</button>
            </div>
        </>
    )
}