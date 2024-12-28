import styles from "./page.module.css";
interface IProps {
  arr: IListItem[];
}
export interface IListItem {
  label?: string;
  value: string | JSX.Element;
}
export function List(props: IProps) {
  return (
    <div>
      {props.arr.map((item, index) => (
        <div className={styles.listItem} key={index}>
          <div className={styles.listLabel}>{item.label}</div>
          <div className={styles.listValue}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export function ListItem(props: IListItem) {
  return <div className={styles.listValue}>{props.value}</div>;
}
