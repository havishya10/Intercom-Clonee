export function Message({ avatar, name, msg, time }) {
  return (
    <>
      <div className="flex flex-row  items-center justify-between  hover:bg-gradient-to-r hover:from-[#f0f0eb] hover:to-yellow-50 transition-colors duration-200 rounded-lg p-2 cursor-pointer">
        <div className="flex flex-row gap-5 w-[80%] items-center">
          {avatar ? (
            <div>{avatar}</div>
          ) : (
            <div className="">
              <h2 className="w-fit py-0.5em px-2 text-center text-lg bg-slate-500 text-white font-bold rounded-full">
                {name[0]}
              </h2>
            </div>
          )}
          <div className="">
            <h2 className="font-bold">{name}</h2>
            <p className={"font-medium text-sm text-gray-950"}>{msg.slice(0, 30)}...</p>
          </div>
        </div>
        <p className={"text-sm text-gray-500"}>{time}</p>
      </div>
    </>
  );
}
