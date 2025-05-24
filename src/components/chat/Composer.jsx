import React from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Markdown } from "../Markdown";
export function Composer() {
  return (
      <div className="bg-white focus-within:bg-gradient-to-b focus-within:from-indigo-100 focus-within:via-purple-50 focus-within:to-white shadow-[0_-5px_5px_-5px_rgba(0,0,0,0.1)] flex flex-col gap-3 transition-all duration-3000">
        <div className="flex py-2 px-4 flex-row gap-2 items-center">
        <span className="icon">
          <BiSolidMessageDetail />
        </span>
          <p className="text-md font-bold">Reply</p>
          <span className="icon">
          <IoMdArrowDropdown />
        </span>
        </div>

        <div>
          <Markdown />
        </div>

        <div className="flex py-2 px-4 flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
          <span className="icon">
            <AiFillThunderbolt />
          </span>
            <span className="icon">
            <FaBookmark />
          </span>
            <span className="icon">
            <MdEmojiEmotions />
          </span>
          </div>
          <button className="bg-sky-100 flex items-center text-gray-600 cursor-pointer px-4 py-2 rounded-md">
            Send
            <span>
            <IoMdArrowDropdown />
          </span>
          </button>
        </div>
      </div>
  );
}
