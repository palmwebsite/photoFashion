"use client";
import { useState } from "react";
import { Hamburger } from "../hamburger/Hamburger";
import { Nav } from "../nav/Nav";
import style from "./style.module.css";
export function Menu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`${style.msNav} ${isActive ? style.isVisible : ""}`}>
      <Hamburger onClick={() => setIsActive(!isActive)} />
      <div className={`${style.heightFullVp} `}>
        <Nav isVisible={isActive} />
      </div>
    </div>
  );
}
