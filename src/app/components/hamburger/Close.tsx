import { ColorScheme } from "../dto";
import style from "./style.module.css";

interface IProps {
  onClick: () => void;
  hamburgerColor: ColorScheme;
}
export function Close({ onClick, hamburgerColor }: IProps) {
  const hamburgerIsLight = hamburgerColor === "light";
  return (
    <button
      className={`${style.hamburger} ${style.isActive} ${
        hamburgerIsLight ? style.lightHamburger : style.darkHamburger
      }`}
      type="button"
      data-toggle="navigation"
      onClick={() => {
        onClick();
      }}
    >
      <span className={style.hamburgerBox}>
        <span className={style.hamburgerInner}></span>
      </span>
    </button>
  );
}
