import { Link } from "wouter";

type NavLinkProps = {
  text: string;
  href: string;
  theme: string;
};

export const NavLink = ({ text, href, theme }: NavLinkProps) => {
  return (
    <Link className={(active) => (active ? `active-${theme}` : "")} href={href}>
      {text}
    </Link>
  );
};
