import style from "./style.module.css";

export interface IFilter<T = string> {
  label: string;
  tag: T;
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
              props.activeId === item.tag ? style.active : ""
            }`}
            key={item.tag}
            onClick={() => props.onClick(item.tag)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
