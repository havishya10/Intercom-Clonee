import { FaArrowLeft } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiPhoneFill } from "react-icons/ri";
import { GiNightSleep } from "react-icons/gi";
import {Composer} from "../components/chat/Composer";
import {ChatWindow} from "../components/chat/ChatWindow";

import {Inbox} from "./Inbox";
import React from "react";

export function Chat({handleChat}) {
    function openInbox() {
        handleChat(true);
    }
  return (
      <>

          <div className={"w-full h-screen flex bg-white flex-col justify-between"}>
      <div className="chat-header flex flex-row justify-between items-center p-3 bg-white shadow-sm">
        <div className="flex flex-row items-center gap-2 ">
          <div
              onClick={() => openInbox()}
              className="cursor-pointer px-3 sm">
            <FaArrowLeft />
          </div>
          <h1 className="text-lg font-bold">Tom Simone</h1>
        </div>
        <div className="icon flex flex-row gap-4 items-center">
          <IoStarOutline />
          <BiDotsHorizontalRounded />
          <RiPhoneFill />
          <GiNightSleep />
        </div>
      </div>
      <div className="chat-window  flex-1 overflow-y-auto">
        <ChatWindow />
      </div>
      <Composer />
    </div>
      </>
  );
}
