import { ISlide } from "./dto";
import Image from "next/image";
import styles from "./style.module.css";

interface IProps {
  conf: ISlide;
}
export function Slide(props: IProps) {
  const conf = props.conf;
  return (
    <div>
      <Image
        src={conf.src}
        alt={conf.alt}
        width={conf.width}
        height={conf.height}
        priority
      />
      <div className={styles.innerSlogans}>
        <h1>bla bla blaaa</h1>
        <h2>kae perrä</h2>
      </div>
    </div>
  );
}
