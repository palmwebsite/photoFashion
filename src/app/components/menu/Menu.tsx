"use client";
import { useState } from "react";
import { Hamburger } from "../hamburger/Hamburger";
import { Nav } from "../nav/Nav";
import style from "./style.module.css";
import { ColorScheme } from "../dto";
import { usePathname } from "next/navigation";
const DARK_PAGES = ["/"];

export function Menu() {
  const pathname = usePathname();
  const menuBgIsDark = DARK_PAGES.includes(pathname);
  const [isActive, setIsActive] = useState(false);
  const hamburgerColor: ColorScheme = menuBgIsDark ? "light" : "dark";

  console.log(pathname, hamburgerColor);

  return (
    <div
      className={`${style.menu} ${isActive ? style.isVisible : ""} ${
        menuBgIsDark ? style.bgDark : style.bgLight
      }`}
    >
      <Hamburger
        onClick={() => setIsActive(!isActive)}
        isActive={isActive}
        hamburgerColor={hamburgerColor}
      />
      <div className={`${style.heightFullVp} `}>
        {/* this is what opens fully and where user sees the menu when they have clicked the menu button */}
        <Nav isVisible={isActive} handleClick={() => setIsActive(!isActive)} />
      </div>
    </div>
  );
}
