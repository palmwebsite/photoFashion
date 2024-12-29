import { TagType } from "../gallery/conf";
import style from "./style.module.css";

export interface IFilter {
  label: string;
  tag: TagType;
}
interface IProps {
  arr: IFilter[];
  onClick: (id: TagType) => void;
  activeIds: TagType[] | undefined;
}

export function Filter(props: IProps) {
  return (
    <div className={style.filter}>
      {props.arr.map((item) => {
        return (
          <div
            className={`${style.item} ${
              (props.activeIds || []).includes(item.tag) ? style.active : ""
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
