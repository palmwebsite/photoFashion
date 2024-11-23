"use client"; // Only needed in the App Router

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { FILTER, IMAGES } from "./conf";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperComponent from "../swiper/SwiperComponent";
import { Close } from "../hamburger/Close";
import { IImage } from "../dto";
import { Page } from "../layouts/Page";
import { Filter } from "../filter/Filter";

const Gallery = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [_images, setImages] = useState(IMAGES);

  const handleImageClick = (index: number) => {
    console.log(index);
    setInitialIndex(index);
    setIsSliderVisible(true); // Show the slider when an image is clicked
  };

  const handleFilterClick = (id: string) => {
    console.log(id);
    setActiveFilter(id);
    setImages(
      IMAGES.filter((image) => image.tags?.includes(id) || id === "all")
    );
  };

  return (
    <Page>
      <Filter
        arr={FILTER}
        onClick={handleFilterClick}
        activeId={activeFilter}
      />
      <div className={styles.gallery}>
        {_images.map((conf: IImage, index: number) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => handleImageClick(index)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={`/images/${conf.id}.webp`}
              alt={conf.alt}
              width={conf.isHorizontal ? 800 : 600}
              height={conf.isHorizontal ? 600 : 800}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Full-Width and Full-Height Swiper Slider */}
      {isSliderVisible && (
        <div className={styles.slider}>
          <Close
            hamburgerColor="light"
            onClick={() => setIsSliderVisible(false)}
          />
          <SwiperComponent
            images={IMAGES}
            wantsTextOnNavigation={false}
            initialIndex={initialIndex}
            wantsZoomEffect={false}
            wantsCover={false}
          />
        </div>
      )}
    </Page>
  );
};

export default Gallery;
