import Link from "next/link";
import { NAVS } from "./urls";
import style from "./nav.module.css";

interface IProps {
  isVisible: boolean;
  handleClick: () => void;
}
export function Nav(props: IProps) {
  return (
    <nav
      className={` ${style.msNavbar} ${props.isVisible ? style.isVisible : ""}`}
    >
      {NAVS.map((nav) => (
        <Link
          key={nav.url}
          href={nav.url}
          className={style.navItem}
          onClick={props.handleClick}
        >
          <span className={style.msButton}> {nav.label}</span>
          <span className={style.navItem__label}> {nav.description}</span>
        </Link>
      ))}
    </nav>
  );
}
