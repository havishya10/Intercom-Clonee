import React from "react";
import "./App.css";
import {Inbox} from "./pages/Inbox";
import {Chat} from "./pages/Chat";
import { Details} from "./pages/Details.jsx";
import { Copilot } from "./pages/Copilot";
import { Sidebar } from "./components/Sidebar";
import {Dock} from "./components/Dock";
export default function App() {
    const [inboxStatus, setInboxStatus] = React.useState(true);
    const [homeStatus, setHomeStatus] = React.useState(true);
  return (
      <>
          <div className={"small-screens min-h-screen h-screen flex flex-col"}>
              <div className="flex-1 overflow-auto">
                  {homeStatus ? (inboxStatus ? <Inbox handleInbox={setInboxStatus}/> :
                      <Chat handleChat={setInboxStatus}/>) : <Copilot/>}
              </div>
              <div className="w-full mt-auto">
                  <Dock handleHome={setHomeStatus}/>
              </div>
          </div>
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



    </>
  );
}
