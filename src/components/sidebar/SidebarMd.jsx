import React from "react";

import { Sidebar } from "../Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export function SidebarMd() {
  const [openSidebar, setOpenSidebarStatus] = React.useState(false);
  return (
    <>
      {/* Sidebar Slide-In */}
      <div
        className={` overflow-auto 
                  fixed top-0 left-0 h-screen w-[270px] bg-white z-50 
                  transform transition-transform duration-300 ease-in-out 
                  ${openSidebar ? "translate-x-0" : "-translate-x-full"}
                `}
      >
        <Sidebar />
      </div>
      {/* Overlay (click to close sidebar) */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebarStatus(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
      <div className="inbox-header p-3 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => {
              setOpenSidebarStatus(!openSidebar);
            }}
          >
            <div className="text-xl">
              <GiHamburgerMenu />
            </div>
          </button>
        </div>
      </div>

    </>
  );
}
