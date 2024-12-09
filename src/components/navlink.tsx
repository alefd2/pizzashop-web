import { Link, LinkProps, useLocation } from "react-router";

export type NavLinkProps = LinkProps;

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation();

  const isActive = pathname === props.to;
  return (
    <Link
      data-current={isActive}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  );
};
