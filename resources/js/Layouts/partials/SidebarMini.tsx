import { Link, usePage } from "@inertiajs/react"
import clsx from "clsx";
import Dropdown from "@/components/Dropdown";
import { BsArchive, BsChat, BsPeople } from "react-icons/bs"
import BadgeNotification from "@/components/chats/BadgeNotification";
import { PageProps } from "@/types";

export default function SidebarMini() {
  const { auth } = usePage<PageProps>().props;
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
      <div className="relative flex flex-1 cursor-pointer items-center justify-center rounded-lg px-3 transition-all hover:bg-secondary sm:mt-auto sm:flex-initial sm:px-0 sm:hover:bg-transparent">
          <Dropdown>
            <Dropdown.Trigger>
              <img
                src={auth.avatar}
                alt=""
                className="h-8 w-8 rounded-full border border-secondary sm:h-10 sm:w-10"
              />
          </Dropdown.Trigger>
          <Dropdown.Content align="top-left" contentClasses=" mb-12 sm:mb-10">
            <Dropdown.Link href="" className="flex gap-2 items-center">
              <BsArchive className="h-6 w-6" />
              <span>preferneces</span>
            </Dropdown.Link>
          </Dropdown.Content>
      </Dropdown>
      </div>
    </div>
  )
}
