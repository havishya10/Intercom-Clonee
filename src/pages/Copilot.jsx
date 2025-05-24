import {FaArrowUp} from "react-icons/fa";
import copilot  from "../assets/copilot.svg"
import React from "react";
export function Copilot() {

    return (
        <div className={"flex  flex-col justify-between  bg-gradient-to-b from-white via-[#fff7f0] via-40% via-[#f9f0ff] via-70% to-[#fffde7] to-90%"}>
            <div className={"flex flex-row  p-4  shadow-sm gap-6 items-center"}>

                <h2 className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-violet-800 via-rose-500 to-amber-600 text-transparent bg-clip-text">
                    AI Copilot
                </h2>


            </div>

            <div
                className={"chat-interface   h-full flex flex-col "}>
                <div className={"flex flex-row justify-center items-center h-full"}>
                    <div className={"flex flex-col justify-center items-center gap-1"}>
                        <img src={`${copilot}`} alt="Copilot" className={"w-8"}/>
                        <h1 className={"text-xl font-bold"}> Hi, I'm Fin AI Copilot</h1>
                        <p className={"text-sm text-gray-400"}>Ask me anything about this conversation</p>
                    </div>
                </div>
            </div>
            <div
                className="p-2 my-2 mx-3 shadow-md border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-purple-100 focus-within:border-violet-200 transition-all duration-200 bg-gradient-to-r from-pink-50 via-purple-0 to-indigo-50">
                <div className="flex gap-2">
                    <input
                        className="flex-1 border-0 focus:outline-none bg-transparent"
                        type="text" placeholder="Ask a question"/>
                    <button className="p-3">
                        <FaArrowUp className="text-lg text-gray-400"/>
                    </button>
                </div>
            </div>
        </div>
    )
}