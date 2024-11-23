import { PropsWithChildren } from "react";
import style from "./page.module.css";

export function Page(props: PropsWithChildren) {
  return <div className={style.page}>{props.children}</div>;
}
