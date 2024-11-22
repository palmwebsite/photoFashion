"use client";
import { useState } from "react";
import style from "./style.module.css";

interface IProps {
  onClick: () => void;
}
export function Hamburger(props: IProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className={`${style.hamburger} ${isActive ? style.isActive : ""}`}
      type="button"
      data-toggle="navigation"
      onClick={() => {
        setIsActive(!isActive);
        props.onClick();
      }}
    >
      <span className={style.hamburgerBox}>
        <span className={style.hamburgerLabel}>menu</span>
        <span className={style.hamburgerInner}>...</span>
      </span>
    </button>
  );
}
