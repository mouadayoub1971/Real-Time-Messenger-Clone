import { PropsWithChildren } from "react";
import { Head } from "@inertiajs/react";

export default function AppLayout({title, children} : PropsWithChildren<{title: string}>) {
  return (
    <>
      <Head title={title} />
      <div className="flex flex-row h-screen bg-background text-foreground ">{ children}</div>
    </>
  )
}
