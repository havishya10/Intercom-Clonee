export function SidebarItem({ icon, text, num }) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3 items-center ">
          {icon}
          <p>{text}</p>
        </div>
        <p>{num}</p>
      </div>
    </>
  );
}
