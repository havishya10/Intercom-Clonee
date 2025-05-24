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
    <div className="border-t-2 border-gray-100 bg-white shadow-md flex flex-col">
      <div className="flex py-2 px-4 flex-row gap-2 items-center ">
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
        <button className="bg-gray-200 flex items-center text-gray-400 px-4 py-2 rounded-md ">
          Send
          {
            <span>
              <IoMdArrowDropdown />
            </span>
          }
        </button>
      </div>
    </div>
  );
}
