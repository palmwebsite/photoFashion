import { PropsWithChildren } from "react";
import style from "./page.module.css";

export function Header(props: PropsWithChildren) {
  return <h1 className={style.header}>{props.children}</h1>;
}
