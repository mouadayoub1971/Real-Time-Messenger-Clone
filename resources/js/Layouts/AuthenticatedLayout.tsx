import ApplicationLogo from "@/components/ApplicationLogo";
import Dropdown from "@/components/Dropdown";
import NavLink from "@/components/NavLink";
import ResponsiveNavLink from "@/components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { BsBoxArrowDown, BsBoxArrowRight } from "react-icons/bs";

export default function Authenticated({
  header,
  children,
}: PropsWithChildren<{ header?: ReactNode }>) {
  const user = usePage().props.auth.user;

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen bg-secondary ">
      <nav className="border-b border-secondary bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex gap-4 ">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  <ApplicationLogo className="block h-9 w-auto" />
                </Link>
              </div>
                <NavLink
                  href={route("chats.index")}
                  active={false}
                >
                  chats
                </NavLink>
            </div>
            <div className="flex items-center ml-auto ">
              <Link href={route("logout")}
                as="Button"
                method="post"
                className="flex items-center gap-3 btn btn-secondary border-none whitespace-nowrap"
              >
                <BsBoxArrowRight />
                Log out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-background shadow">
          <div className="mx-auto max-w-7xl p-4 sm:p-6">
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
