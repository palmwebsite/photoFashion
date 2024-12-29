"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.style.module.css";
import buttons from "./style.buttons.module.css";
import { Navigation, Pagination, Keyboard, Virtual } from "swiper/modules";
import trans from "@/app/locales/translations.et.json";
import { Slide } from "./Slide";
import { useState } from "react";
import { ISlide } from "../dto";

interface IProps {
  images: ISlide[];
  wantsTextOnNavigation: boolean;
  initialIndex?: number;
  wantsZoomEffect: boolean;
  wantsCover: boolean;
  wantLoop: boolean;
}

type PaginationType = "bullets" | "fraction" | "progressbar" | "custom";
const bullets: PaginationType = "bullets";
const fraction: PaginationType = "fraction";

export default function SwiperComponent(props: IProps) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const [indexHistory, setIndexHistory] = useState<number[]>([]);

  const pagination = {
    type: props.images.length < 15 ? bullets : fraction,
    clickable: props.images.length < 15,
    renderBullet:
      props.images.length < 15
        ? function (index: number, className: string) {
            return `<span class="${styles.progressBarItem} ${className}"></span>`;
          }
        : undefined,
  };
  return (
    <div className={styles.swiperContainer}>
      {/* Custom Navigation Buttons */}
      <button className={buttons.prevButton} data-swiper-nav="prev">
        {props.wantsTextOnNavigation ? trans.prev : ""}
      </button>
      <button className={buttons.nextButton} data-swiper-nav="next">
        {props.wantsTextOnNavigation ? trans.next : ""}
      </button>
      {/* Swiper Component */}
      <Swiper
        className={styles.mySwiper}
        pagination={pagination}
        initialSlide={props.initialIndex || 0}
        modules={[Navigation, Pagination, Keyboard, Virtual]}
        keyboard={true}
        slidesPerView={1}
        loop={true}
        speed={1500} /* Slower slide transition (in milliseconds) */
        navigation={{
          prevEl: '[data-swiper-nav="prev"]',
          nextEl: '[data-swiper-nav="next"]',
        }}
        virtual={true}
        onSlideChange={(swiper) => {
          const _realIndex = swiper.realIndex;
          setActiveIndex(_realIndex); // Track the active slide

          setIndexHistory((prev) => {
            if (prev.length > 0) {
              if (prev[prev.length - 1] !== _realIndex) {
                return [...prev, _realIndex];
              } else {
                return prev;
              }
            } else {
              return [_realIndex];
            }
          });
        }}
      >
        {props.images.map((photo, index: number) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Slide
              conf={photo}
              isActive={index === activeIndex}
              isPrev={index === indexHistory[indexHistory.length - 2]}
              wantsZoomEffect={props.wantsZoomEffect}
              wantsCover={props.wantsCover}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
