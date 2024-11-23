"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.style.module.css";
import buttons from "./style.buttons.module.css";
import { Navigation } from "swiper/modules";
import trans from "@/app/locales/translations.et.json";
import { PHOTOS } from "./conf";
import { Slide } from "./Slide";
import { useState } from "react";

export default function SwiperComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  return (
    <div className={styles.swiperContainer}>
      {/* Custom Navigation Buttons */}
      <button className={buttons.prevButton} data-swiper-nav="prev">
        {trans.prev}
      </button>
      <button className={buttons.nextButton} data-swiper-nav="next">
        {trans.next}
      </button>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        speed={1500} /* Slower slide transition (in milliseconds) */
        navigation={{
          prevEl: '[data-swiper-nav="prev"]',
          nextEl: '[data-swiper-nav="next"]',
        }}
        onSlideChange={(swiper) => {
          setPreviousIndex(activeIndex); // Track the previous slide
          setActiveIndex(swiper.realIndex); // Track the active slide
        }}
      >
        {PHOTOS.map((photo, index) => (
          <SwiperSlide key={index}>
            <Slide
              conf={photo}
              isActive={index === activeIndex}
              isPrev={index === previousIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
