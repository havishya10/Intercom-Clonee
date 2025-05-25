import React from "react";
import "./App.css";
import {Inbox} from "./pages/Inbox";
import {Chat} from "./pages/Chat";
import { Details} from "./pages/Details.jsx";
import { Copilot } from "./pages/Copilot";
import { Sidebar } from "./components/Sidebar";
export default function App() {
    const [inboxStatus, setInboxStatus] = React.useState(true);
    function handleInboxChat() {

        setInboxStatus(!inboxStatus);
    }
  return (
    <>

        <div className={"medium-screens h-screen  "}>
            {inboxStatus ? <Inbox handleInbox={setInboxStatus} /> : <Chat handleChat={setInboxStatus} />}
            <Copilot />
        </div>

        <div className={"large-screens   h-screen   "}>
           <span className={"lg-sidebar"}><Sidebar  /></span>
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
