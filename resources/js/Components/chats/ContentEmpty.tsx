export default function ContentEmpty() {
  return (
    <div className="hidden sm:flex order-3 flex-col items-center justify-center w-full flex-1 h-screen border-secondary border-l gap-4 ">
      <img src="/images/message-empty.png" alt="" className="w-[245px] " />
      <h5>No chats selected</h5>
    </div>
  )
}
