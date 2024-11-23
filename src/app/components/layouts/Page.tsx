import { PropsWithChildren } from "react";
import style from "./page.module.css";

interface IProps {
  width?: string;
}

export function Page(props: PropsWithChildren<IProps>) {
  return (
    <div style={{ width: props.width }} className={style.page}>
      {props.children}
    </div>
  );
}
