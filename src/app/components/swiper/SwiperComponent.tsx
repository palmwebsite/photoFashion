"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.style.module.css";
import buttons from "./style.buttons.module.css";
import { Navigation } from "swiper/modules";
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
}

export default function SwiperComponent(props: IProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);

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
        initialSlide={props.initialIndex || 0}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        speed={1500} /* Slower slide transition (in milliseconds) */
        navigation={{
          prevEl: '[data-swiper-nav="prev"]',
          nextEl: '[data-swiper-nav="next"]',
        }}
        onSlideChange={(swiper) => {
          console.log(swiper);
          const _realIndex = swiper.realIndex;
          console.log("_realIndex", JSON.stringify(_realIndex));
          const prevIndex =
            _realIndex === props.initialIndex || swiper.isBeginning
              ? -1
              : activeIndex;
          console.log(
            "is beginning",
            swiper.isBeginning,
            "calculated prev index",
            prevIndex
          );
          console.log(
            "swiper activeindex:",
            swiper.activeIndex,
            "swiper previousRealIndex",
            (swiper as any).previousRealIndex,
            "swiper realIndex",
            swiper.previousIndex
          );

          setPreviousIndex(prevIndex); // Track the previous slide
          setActiveIndex(_realIndex); // Track the active slide
        }}
      >
        {props.images.map((photo, index: number) => (
          <SwiperSlide key={index}>
            <Slide
              conf={photo}
              isActive={index === activeIndex}
              isPrev={index === previousIndex}
              wantsZoomEffect={props.wantsZoomEffect}
              wantsCover={props.wantsCover}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
