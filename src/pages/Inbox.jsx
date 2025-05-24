import React from "react";
import {IoIosArrowDown} from "react-icons/io";
import {Message} from "../components/Message";
import {Avatar} from "../components/Avatar";
import {SidebarMd} from "../components/sidebar/SidebarMd";

import { Chat } from "./Chat";

export function Inbox() {

  const inboxMessages = [
    {
      avatar: <Avatar imageNo={1} size={8} />,
      name: "Heather Ho",
      msg: "Hey, I need help with my order",
      time: "2m",
    },
    {
      avatar: <Avatar size={8} imageNo={2} />,
      name: "John Doe",
      msg: "Can you please check my ticket?",
      time: "9m",
    },
    {
      avatar: <Avatar size={8} imageNo={3} />,
      name: "Jane Smith",
      msg: "I have a question about my subscription",
      time: "12m",
    },
    {
      avatar: <Avatar size={8} imageNo={0} />,
      name: "Michael Johnson",
      msg: "Can you help me with my account?",
      time: "15m",
    },
    {
      avatar: "",
      name: "Emily Davis",
      msg: "I need assistance with my payment",
      time: "20m",
    },
  ];
  function openChat() {

    const inboxEl = document.getElementById("inbox");
    inboxEl.classList.toggle("hidden")
    const chatEl = document.getElementById("chat-view");
    chatEl.classList.toggle("hidden")
  }

  return (
      <>
        <div id={"chat-view"} className={"hidden h-screen"}>
          <Chat />        </div>


    <div id={"inbox"} className={" flex flex-col gap-3 overflow-auto bg-[#fafaf6] border border-gray-200 shadow-sm rounded-lg " }>
      <div className="flex flex-row items-center shadow-sm ">
        <div className={"sm"}>
          <SidebarMd/>
        </div>
        <h1 id="inbox-type" className="font-bold text-lg p-3">
          Inbox
        </h1>
      </div>
      <div className="w-full flex flex-col gap-3 p-3">
        <div className="flex flex-row justify-between items-center ">
          <div className="font-bold text-sm flex flex-row gap-6  items-center">
            <div className="flex  flex-row gap-[.4em] items-center">
              <h3 id="inbox-num">6</h3>
              <p className="">Open</p>
            </div>
            <div className="">
              <IoIosArrowDown />
            </div>
          </div>
          <div className="font-bold text-sm flex flex-row gap-6  items-center">
            <p className="">Newest </p>

            <div className="">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <ul className="inbox-messages flex-1 overflow-auto">
          {inboxMessages.map((message, index) => (
            <li
                onClick={() => openChat()}
                key={index} className="py-2">
              <Message
                avatar={message.avatar}
                name={message.name}
                msg={message.msg}
                time={message.time}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
      </>
        );
}
