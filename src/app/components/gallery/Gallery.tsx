"use client"; // Only needed in the App Router

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { IImage, IMAGES } from "./conf";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperComponent from "../swiper/SwiperComponent";
import { Close } from "../hamburger/Close";

const Gallery = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleImageClick = (index: number) => {
    console.log(index);
    setInitialIndex(index);
    setIsSliderVisible(true); // Show the slider when an image is clicked
  };

  return (
    <div>
      {/* Image Gallery */}
      <div className={styles.gallery}>
        {IMAGES.map((image: IImage, index: number) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={`/images/${image.id}.webp`}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* <Swiper
        initialSlide={0}
        modules={[Navigation, Pagination, Keyboard]} // Add all required modules
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        style={{ marginBottom: "20px" }}
      >
        <SwiperSlide>
          <div style={{ textAlign: "center", padding: "50px" }}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: "center", padding: "50px" }}>Slide 2</div>
        </SwiperSlide>
      </Swiper> */}

      {/* Full-Width and Full-Height Swiper Slider */}
      {isSliderVisible && (
        <div className={styles.slider}>
          <Close
            hamburgerColor="light"
            onClick={() => setIsSliderVisible(false)}
          />
          <Swiper
            initialSlide={initialIndex}
            modules={[Navigation, Pagination, Keyboard]} // Add all required modules
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            style={{ marginBottom: "20px", width: "100%", height: "100%" }}
          >
            {IMAGES.map((image: IImage, index: number) => (
              <SwiperSlide key={index}>
                <div className={styles.slide}>
                  <Image
                    src={`/images/${image.id}.webp`}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className={styles.sliderImage}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={styles.closeButton}
            onClick={() => setIsSliderVisible(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
