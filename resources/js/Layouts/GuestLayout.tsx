import ApplicationLogo from "@/components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col w-full p-6 space-y-4 max-w-md overflow-hidden bg-background shadow-md">
        <Link href="/" className="mx-auto">
          <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
        </Link>
        {children}
      </div>

    </div>
  );
}
