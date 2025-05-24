import {IoIosArrowDown} from "react-icons/io";
import {Message} from "../components/Message";
import {Avatar} from "../components/Avatar";
import {SidebarMd} from "../components/sidebar/SidebarMd";
export function Inbox() {
  const inboxMessages = [
    {
      avatar: <Avatar imageNo={1} size={8} />,
      name: "Heather Ho",
      msg: "Hey, I need help with my order",
      time: "2m",
    },
    {
      avatar: <Avatar size={7} imageNo={2} />,
      name: "John Doe",
      msg: "Can you please check my ticket?",
      time: "9m",
    },
    {
      avatar: <Avatar size={7} imageNo={3} />,
      name: "Jane Smith",
      msg: "I have a question about my subscription",
      time: "12m",
    },
    {
      avatar: <Avatar size={7} imageNo={0} />,
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
  return (
    <div>
      <div className="flex flex-row items-center gap-1 p-1">
        <div className={"md:hidden"}>
          <SidebarMd/>
        </div>
        <h1 id="inbox-type" className="text-xl font-bold">
          Inbox
        </h1>
      </div>
      <div className=" h-screen w-full flex flex-col">
        <div className="flex flex-row justify-between items-center p-3">
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
            <li key={index} className="p-3">
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
  );
}
