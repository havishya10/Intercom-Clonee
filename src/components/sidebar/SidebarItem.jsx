export function SidebarItem({icon, text, num}) {
    return (
        <>
            <div
                className="flex cursor-pointer rounded-lg py-3 px-2 flex-row justify-between items-center  hover:bg-gradient-to-r hover:from-[#f0f0eb] hover:to-yellow-50 transition-colors duration-200">
            <div className="flex flex-row gap-3  items-center">
                {icon}
                    <p className={"text-sm"}>{text}</p>
                </div>
                <p className={"text-sm text-gray-500 font-medium"}>{num}</p>
            </div>
        </>
    );
}