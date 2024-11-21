import { ISlide } from "./dto";
import Image from "next/image";
import slide from "./style.slide.module.css";

interface IProps {
  conf: ISlide;
  isActive: boolean;
  isPrev: boolean;
}
export function Slide(props: IProps) {
  const conf = props.conf;
  return (
    <div
      className={`${slide.slideContainer} ${
        props.isActive ? slide.activeSlide : ""
      } ${props.isPrev ? slide.exitingSlide : ""}`}
    >
      <Image
        src={conf.src}
        alt={conf.alt}
        width={conf.width}
        height={conf.height}
        priority
        className={slide.image}
      />
      <div className={slide.overlay}></div>
      <div className={slide.innerSlogans}>
        <h1>bla bla blaaa</h1>
        <h2>kae perrä</h2>
      </div>
    </div>
  );
}
