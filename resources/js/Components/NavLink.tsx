import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function NavLink({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  return (
    <Link
      {...props}
      className={
        " inline-flex items-center " +
        (active
          ? "border-primary text-foreground focus:border-primary"
          : "border-transparent text-foreground hover:border-secondary hover:text-secondary-foreground focus:border-secondary focus:text-foreground") +
        className
      }
    >
      {children}
    </Link>
  );
}
