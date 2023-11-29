import React from "react";

export default function Header( { handleThemeChange } ) {
    return(
        <>
            <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white flex justify-between py-4 px-8 shadow-md">
                <h1 className="font-bold text-xl">Where in the world?</h1>
                <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 fill-black dark:fill-white dark:stroke-white" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                    <button 
                        className="hover:scale-110 hover:bg-gray-300 hover:text-gray-700 px-4 py-1 rounded-sm"
                        onClick={handleThemeChange}
                        >     
                        Dark Mode
                    </button>
                </div>
            </div>
        </>
    )
}