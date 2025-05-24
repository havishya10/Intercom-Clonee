import React from "react";
import "./App.css";
import {Inbox} from "./pages/Inbox";
import {Chat} from "./pages/Chat";
import { Details} from "./pages/Details.jsx";
import { Copilot } from "./pages/Copilot";

import { SidebarMd } from "./components/sidebar/SidebarMd";
import { Sidebar } from "./components/Sidebar";
export default function App() {

  return (
    <>
        <div className={"medium-screens h-screen  "}>
            <Inbox />
            <Copilot />
        </div>
        <div className={"large-screens  h-screen   "}>
           <span className={"lg"}><Sidebar  /></span>
            <Inbox />
            <Chat />
            <Copilot />
            {/*<Details />*/}
        </div>
        {/*<div className={"small-screens h-screen  "}>*/}
        {/*   <SidebarMd />*/}
        {/*</div>*/}


    </>
  );
}
