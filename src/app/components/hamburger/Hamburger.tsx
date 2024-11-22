import style from "./style.module.css";

interface IProps {
  onClick: () => void;
  isActive: boolean;
}
export function Hamburger({ onClick, isActive }: IProps) {
  return (
    <button
      className={`${style.hamburger} ${isActive ? style.isActive : ""}`}
      type="button"
      data-toggle="navigation"
      onClick={() => {
        onClick();
      }}
    >
      <span className={style.hamburgerBox}>
        <span className={style.hamburgerLabel}>menu</span>
        <span className={style.hamburgerInner}>...</span>
      </span>
    </button>
  );
}
