import { Avatar } from "../Avatar";
export function Recieve({ message }) {
  return (
    <>
      <div className="flex  justify-start  m-3">
        <div className="w-12">
          <Avatar size={7} imageNo={2} />
        </div>
        <p className="w-100 text-sm rounded-lg bg-[#f0f0eb] p-3">{message}</p>
      </div>
    </>
  );
}

export function Send({ message }) {
  return (
    <>
      <div className=" gap-3 flex items-end justify-end  ">
        <p className="w-100 text-sm rounded-lg bg-sky-100 p-3">{message}</p>

        <div className="w-12">
          <Avatar size={7} imageNo={1} />
        </div>
      </div>
    </>
  );
}
