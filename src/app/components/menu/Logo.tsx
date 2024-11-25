import Link from "next/link";
import style from "./logo.module.css";
import { ColorScheme } from "../dto";
import trans from "@/app/locales/translations.et.json";

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
      <Link href={"/"}>{trans.menu.home}</Link>
    </div>
  );
}
