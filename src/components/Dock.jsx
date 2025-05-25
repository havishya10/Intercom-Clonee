import React from "react";
import  copilot  from "../assets/copilot.svg"
import { GoMail } from "react-icons/go";
export function Dock({handleHome}) {
    return (
        <>
            <div
                className={" cursor-pointer grid grid-cols-2 divide-x backdrop-blur-md bg-white/70 p-4 border-t border-gray-200 mx-auto max-w-md rounded-t-3xl shadow-lg"}>
                <div onClick={() => handleHome(true)} className="flex  justify-center">
                    <div className={"p-3 hover:bg-gray-100 rounded-xl transition-colors"}>
                        <GoMail className={"w-6 h-6"}/>
                    </div>
                </div>
                <div
                    onClick={() => handleHome(false)}
                    className="flex justify-center">
                    <div className={"p-3 flex flex-row justify-center hover:bg-gray-100 rounded-xl transition-colors"}>
                        <img src={copilot} alt="Copilot" className={"w-6 h-6"}/>
                    </div>
                </div>
            </div>
        </>
    )
}