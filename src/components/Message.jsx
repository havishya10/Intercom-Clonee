export function Message({ avatar, name, msg, time }) {
  return (
    <>
      <div className="flex flex-row gap-3 items-center justify-between p-3 hover:bg-gray-100 cursor-pointer">
        <div className="flex flex-row gap-3 w-[80%] items-center">
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
            <p>{msg.slice(0, 25)}...</p>
          </div>
        </div>
        <p>{time}</p>
      </div>
    </>
  );
}
