import AppLayout from "@/layouts/AppLayout";
import SidebarMini from "@/layouts/partials/SidebarMini";
import Sidebar from "../../components/chats/Sidebar";
import ContentEmpty from "@/components/chats/ContentEmpty";

export default function Chats() {
  return (
    <AppLayout title="Chats" >
      <SidebarMini />
      <Sidebar />
      <ContentEmpty />
    </AppLayout>
  )
}
