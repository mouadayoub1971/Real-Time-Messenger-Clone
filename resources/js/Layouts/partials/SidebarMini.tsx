import { Link } from "@inertiajs/react"
import { BsChat } from "react-icons/bs"
import BadgeNotification from "@/components/chats/BadgeNotification";
export default function SidebarMini() {
  return (
    <div className="order-2 flex flex-col justify-center items-center">
      <Link href={route("chats.index")} className="relative flex flex-1 items-center justify-center rounded-lg p-3 transition-all hover:bg-secondary sm:flex-initial">
        <BsChat className="h-6 w-6" />
        <BadgeNotification/>
      </Link>
    </div>
  )
}
