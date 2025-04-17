import { Link } from "@inertiajs/react"
import clsx from "clsx";
import { BsArchive, BsChat, BsPeople } from "react-icons/bs"
import BadgeNotification from "@/components/chats/BadgeNotification";
export default function SidebarMini() {
  return (
    <div className=" flex flex-row sm:flex-col order-2 mt-auto sm:mt-0 sm:justify-center sm:items-center sm:p-2 justify-between sm:order-1 bg-background">
      <Link href={route("chats.index")} className={clsx("relative p-3 flex flex-1 sm:flex-initial items-center justify-center transition-all hover:bg-secondary rounded-lg", route().current("chats.*") && "bg-secondary")}>
        <BsChat className="h-6 w-6" />
        <BadgeNotification/>
      </Link>
      <Link href={route("chats.index")} className={clsx("relative p-3 flex flex-1 sm:flex-initial items-center justify-center transition-all hover:bg-secondary rounded-lg", route().current("contacts.*") && "bg-secondary")}>
        <BsPeople className="h-6 w-6"/>
      </Link>
      <Link href={route("chats.index")} className={clsx("relative p-3 flex flex-1 sm:flex-initial items-center justify-center transition-all hover:bg-secondary rounded-lg", route().current("archived_chats.*") && "bg-secondary")}>
        <BsArchive className="h-6 w-6"/>
      </Link>
    </div>
  )
}
