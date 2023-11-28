import React from "react";

export default function Header() {
    return(
        <>
            <div className="bg-gray-700 text-white flex justify-between py-4 px-8">
                <h1 className="font-bold text-xl">Where in the world?</h1>
                <button className="hover:scale-110 hover:bg-gray-300 hover:text-gray-700 px-4 py-1 rounded-sm">Dark Mode</button>
            </div>
        </>
    )
}