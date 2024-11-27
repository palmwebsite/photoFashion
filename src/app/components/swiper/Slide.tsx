import Image from "next/image";
import slide from "./style.slide.module.css";
import Link from "next/link";
import { ISlide } from "../dto";

interface IProps {
  conf: ISlide;
  isActive: boolean;
  isPrev: boolean;
  wantsZoomEffect: boolean;
  wantsCover: boolean;
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
        src={`/images/${conf.id}.webp`}
        alt={conf.alt}
        className={`${slide.image} ${slide.layoutResponsive} ${
          props.wantsZoomEffect ? slide.zoomedIn : ""
        } ${props.wantsCover ? slide.coverImage : slide.containImage}`}
        width={conf.isLandscape ? 2560 : 1930}
        height={conf.isLandscape ? 1700 : 2560}
      />
      <div className={slide.overlay}></div>
      {conf.title && (
        <Link href={conf.title.href}>
          <div className={slide.innerSlogans}>
            <h1>{conf.title.h1}</h1>
            <h2>{conf.title.h2}</h2>
          </div>
        </Link>
      )}
    </div>
  );
}
