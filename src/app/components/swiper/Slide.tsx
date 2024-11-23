import { ISlide } from "./dto";
import Image from "next/image";
import slide from "./style.slide.module.css";
import Link from "next/link";

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
      style={{ maxWidth: "100%" }}
    >
      <Image
        src={conf.src}
        alt={conf.alt}
        // width={conf.width}
        // height={conf.height}
        className={slide.image}
        objectFit="cover" // Ensures the image scales to cover the container
        layout="fill"
      />
      <div className={slide.overlay}></div>
      <Link href={conf.href}>
        <div className={slide.innerSlogans}>
          <h1>{conf.h1}</h1>
          <h2>{conf.h2}</h2>
        </div>
      </Link>
    </div>
  );
}
