import style from "./style.module.css";

export interface IFilter<T = string> {
  label: string;
  id: T;
}
interface IProps {
  arr: IFilter[];
  onClick: (id: string) => void;
  activeId: string;
}

export function Filter(props: IProps) {
  return (
    <div className={style.filter}>
      {props.arr.map((item) => {
        return (
          <div
            className={`${style.item} ${
              props.activeId === item.id ? style.active : ""
            }`}
            key={item.id}
            onClick={() => props.onClick(item.id)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
