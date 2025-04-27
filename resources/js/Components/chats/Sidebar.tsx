import { FaUsers } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="order-1 flex-1 shrink-0 flex-col gap-2 sm:order-2 sm:flex sm:w-[320px] sm:flex-initial sm:border-l sm:border-secondary lg:w-[360px]">
      <div className=" flex justify-between items-center px-2 pt-6 sm:pb-0 ">
      <h3 className="text-2xl font-semibold">Chats</h3>
      <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
        <FaUsers/>
      </button>
      </div>

    </div>
  )
}
