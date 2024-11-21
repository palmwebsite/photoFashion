"use client"; // This makes the component a Client Component

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.css";
import { Navigation } from "swiper/modules";
import trans from "@/app/locales/translations.et.json";
import { PHOTOS } from "./conf";
import { Slide } from "./Slide";

export default function SwiperComponent() {
  return (
    <div className={styles.swiperContainer}>
      {/* Custom Navigation Buttons */}
      <button className={styles.prevButton} data-swiper-nav="prev">
        {trans.prev}
      </button>
      <button className={styles.nextButton} data-swiper-nav="next">
        {trans.next}
      </button>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]} // Enable Navigation module
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: '[data-swiper-nav="prev"]',
          nextEl: '[data-swiper-nav="next"]',
        }}
      >
        {PHOTOS.map((photo, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide conf={photo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
