import { PropsWithChildren } from "react";
import css from "./page.module.css";

interface IProps {
  style?: any;
}
export function Paragraph(props: PropsWithChildren<IProps>) {
  return (
    <p style={props.style} className={css.paragraph}>
      {props.children}
    </p>
  );
}
