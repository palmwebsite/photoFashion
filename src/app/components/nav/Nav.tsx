import Link from "next/link";
import { NAVS } from "./urls";

export function Navbar() {
  return (
    <nav>
      {NAVS.map((nav) => (
        <Link key={nav.url} href={nav.url}>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}
