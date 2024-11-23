import styles from "./page.module.css";
interface IProps {
  arr: IListItem[];
}
export interface IListItem {
  label: string;
  value: string;
}
export function List(props: IProps) {
  return (
    <div>
      {props.arr.map((item) => (
        <div className={styles.listItem} key={item.value}>
          <div className={styles.listLabel}>{item.label}</div>
          <div className={styles.listValue}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}
