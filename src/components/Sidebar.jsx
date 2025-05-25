import React from "react";
import { Avatar } from "./Avatar";
import { SidebarItem } from "./sidebar/SidebarItem";
import { DropDown } from "./DropDown";
import { GoMention } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { RiBarChartFill } from "react-icons/ri";
export function Sidebar() {
  const sidebarItems = [
    {
      icon: <Avatar size={6} imageNo={1} />,
      text: "Your Inbox",
      num: "6",
    },
    {
      icon: <GoMention className="text-xl" />,
      text: "Mentions",
      num: "10",
    },
    {
      icon: <MdEdit className="text-xl" />,
      text: "Created by you",
      num: "29",
    },
    {
      icon: <IoPeopleSharp className="text-xl" />,
      text: "All",
      num: "937",
    },
    {
      icon: <IoPersonRemoveSharp className="text-xl" />,
      text: "Unassigned",
      num: "268",
    },
    {
      icon: <RiBarChartFill className="text-xl" />,
      text: "Dashboard",
    },
  ];
  const teams = [
    {
      icon: "🌍",
      text: "EMEA",
      num: "12",
    },
    {
      icon: "🌏",
      text: "APAC",
      num: "42",
    },
    {
      icon: "🌎",
      text: "USA",
      num: "3",
    },
  ];
  function handleInbox(title, num) {
    const inboxType = document.getElementById("inbox-type");
    inboxType.innerHTML = title;
    const inboxNum = document.getElementById("inbox-num");
    inboxNum.innerHTML = num;
  }
  return (
      <div className={" flex h-screen flex-col gap-3 overflow-auto bg-[#fafaf6] border border-gray-200 shadow-sm rounded-lg font-semibold"}>
      {/* mobile responsive sidebar */}
      {/* <div className="sidebar w-[200px] h-screen"> */}
      <div className="sidebar-header shadow-sm">
        <h2 className={"font-bold text-lg p-3"}>Help Desk</h2>
      </div>
      <div className="sidebar-content px-2">
        <ul>
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className=""
              onClick={() => handleInbox(item.text, item.num)}
            >
              <SidebarItem icon={item.icon} text={item.text} num={item.num} />
            </li>
          ))}
        </ul>
        <DropDown title="Teams" dropArray={teams} />
        <DropDown title="Teams" dropArray={teams} />
      </div>
      {/* </div> */}
    </div>
  );
}
