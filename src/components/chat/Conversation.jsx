import { Avatar } from "../Avatar";
export function Recieve({ message }) {
  return (
    <>
      <div className="flex gap-3 justify-start hover:bg-gray-100">
        <div className="w-12">
          <Avatar size={7} imageNo={2} />
        </div>
        <p className="w-100">{message}</p>
      </div>
    </>
  );
}

export function Send({ message }) {
  return (
    <>
      <div className=" gap-3 flex items-end justify-end hover:bg-gray-100 ">
        <p className="w-100">{message}</p>

        <div className="w-12">
          <Avatar size={7} imageNo={1} />
        </div>
      </div>
    </>
  );
}
