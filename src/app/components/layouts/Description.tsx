import { PropsWithChildren } from "react";
import style from "./page.module.css";

export function Description(props: PropsWithChildren) {
  return <h2 className={style.description}>{props.children}</h2>;
}
