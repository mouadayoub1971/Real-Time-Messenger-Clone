import { PropsWithChildren } from "react";

export default function AppLayout({title, children} : PropsWithChildren<{title: string}>) {
  return (
    <div>App Layout</div>
  )
}
