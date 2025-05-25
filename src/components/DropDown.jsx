import React, { useState } from "react";
import { SidebarItem } from "./sidebar/SidebarItem";
export function DropDown({ title, dropArray , droplistClasses = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center w-full p-2 transition duration-75 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-sm  text-left rtl:text-right whitespace-nowrap">
          {title}
        </span>
        <svg
          className={`w-2 h-2 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <ul>
          {dropArray.map((item, index) => (
            <li className={"text-sm"}  key={index}>
              <SidebarItem icon={item.icon} text={item.text} num={item.num} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
