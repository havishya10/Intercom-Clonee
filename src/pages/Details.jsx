import {DropDown} from "../components/DropDown.jsx";
import {FiLink, FiMessageSquare} from "react-icons/fi";
import {Avatar} from "../components/Avatar";
import {FaTwitter} from "react-icons/fa";
export function Details() {
    const dropArray = [
        {
            text: "Tracker tickets",
            num: <button className="rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center">+</button>
        },
        {
            text: "Back-office tickets",
            num: <button className="rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center">+</button>
        },
        {
            text: "Side conversations",
            num: <button className="rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center">+</button>
        }
    ]
    return (
        <div className="">
            <div>
                <h2 className="font-bold">Details</h2>
            </div>
            <hr/>
            <div className={"flex flex-row items-center gap-10"}>
                <h2 className="text-md">Assignee</h2>
                <div className={"flex flex-row items-center gap-2"}>
                    <Avatar size={6} imageNo={0}/>
                    <h2 className="text-md font-semibold">John Smith</h2>
                </div>
            </div>
            <div className={"flex flex-row items-center gap-18"}>
                <h2 className="text-md">Team</h2>
                <div className={"flex flex-row items-center gap-2"}>
                    <div className="text-red-500">
                        <FaTwitter/>
                    </div>
                    <h2 className="text-md font-semibold">Dispute team</h2>
                </div>
            </div>
            <div>


            <div>
                    <DropDown
                        title={<span className="flex items-center gap-2"><FiLink/>Links</span>}
                        dropArray={dropArray}
                    />
                </div>
                <hr/>
                <div>
                    <DropDown
                        title={<span className="flex items-center gap-2"><FiMessageSquare/>Conversation attributes</span>}
                        dropArray={[
                            {
                                text: "ID 113962",
                                num: "Elephant Clothing"
                            },
                            {
                                text: "Brand",
                                num: "Summer Collection"
                            },
                            {
                                text: "Status",
                                num: "Active"
                            },
                            {
                                text: "Priority",
                                num: "High"
                            },
                            {
                                text: "Category",
                                num: "Support"
                            },
                            {
                                text: "Assigned To",
                                num: "John Smith"
                            }
                        ]}
                    />
                </div>
                <hr/>
                <div>
                    <DropDown
                        title={<span className="flex items-center gap-2"><FiMessageSquare/>Company details</span>}
                        dropArray={[
                            {
                                text: "Company Name",
                                num: "Elephant Corp"
                            },
                            {
                                text: "Industry",
                                num: "Retail"
                            },
                            {
                                text: "Size",
                                num: "500+"
                            },
                            {
                                text: "Location",
                                num: "New York"
                            }
                        ]}
                    />
                </div>
                <hr/>
                <div>
                    <DropDown
                        title={<span className="flex items-center gap-2"><FiMessageSquare/>User notes</span>}
                        dropArray={[
                            {
                                text: "Last Contact",
                                num: "2024-03-15"
                            },
                            {
                                text: "Account Status",
                                num: "Premium"
                            },
                            {
                                text: "Support History",
                                num: "5 tickets"
                            }
                        ]}
                    />
                </div>
                <hr/>
                <div>
                    <DropDown
                        title={<span className="flex items-center gap-2"><FiMessageSquare/>User tags</span>}
                        dropArray={[
                            {
                                text: "VIP Customer",
                                num: "Active"
                            },
                            {
                                text: "Early Adopter",
                                num: "Yes"
                            },
                            {
                                text: "Beta Tester",
                                num: "Enabled"
                            }
                        ]}
                    />
                </div>
            </div>
            
        </div>
    )
}