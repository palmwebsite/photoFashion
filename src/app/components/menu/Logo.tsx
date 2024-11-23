import Link from "next/link";
import style from "./logo.module.css";
import { ColorScheme } from "../dto";

interface IProps {
  color: ColorScheme;
}
export function Logo(props: IProps) {
  return (
    <div
      className={` ${style.logo} ${
        props.color === "light" ? style.lighLogo : style.darkLogo
      }`}
    >
      <Link href={"/"}>LOGO</Link>
    </div>
  );
}
