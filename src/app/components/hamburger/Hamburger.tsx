import { ColorScheme } from "../dto";
import style from "./style.module.css";

interface IProps {
  onClick: () => void;
  isActive: boolean;
  hamburgerColor: ColorScheme;
}
export function Hamburger({ onClick, isActive, hamburgerColor }: IProps) {
  const hamburgerIsLight = hamburgerColor === "light";
  return (
    <button
      className={`${style.hamburger} ${isActive ? style.isActive : ""} ${
        hamburgerIsLight ? style.lightHamburger : style.darkHamburger
      }`}
      type="button"
      data-toggle="navigation"
      onClick={() => {
        onClick();
      }}
    >
      <span className={style.hamburgerBox}>
        <span className={style.hamburgerLabel}>menu</span>
        <span className={style.hamburgerInner}></span>
      </span>
    </button>
  );
}
