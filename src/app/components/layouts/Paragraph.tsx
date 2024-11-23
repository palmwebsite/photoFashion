import { PropsWithChildren } from "react";
import style from "./page.module.css";

export function Paragraph(props: PropsWithChildren) {
  return <p className={style.paragraph}>{props.children}</p>;
}
