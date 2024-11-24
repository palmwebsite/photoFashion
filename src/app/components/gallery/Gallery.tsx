"use client"; // Only needed in the App Router

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { FILTER, IMAGES_HORIZONTAL, IMAGES_VERTICAL } from "./conf";
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
  const [_imagesH, setImagesH] = useState<IImage[]>(IMAGES_HORIZONTAL);
  const [_imagesV, setImagesV] = useState<IImage[]>(IMAGES_VERTICAL);

  const handleImageClick = (index: number) => {
    console.log(index);
    setInitialIndex(index);
    setIsSliderVisible(true); // Show the slider when an image is clicked
  };

  const handleFilterClick = (id: string) => {
    console.log(id);
    setActiveFilter(id);
    const filter: (image: IImage) => boolean = (image) =>
      image.tags?.includes(id) || id === "all";
    setImagesH(IMAGES_HORIZONTAL.filter((image) => filter(image)));
    setImagesV(IMAGES_VERTICAL.filter((image) => filter(image)));
  };

  return (
    <Page>
      <Filter
        arr={FILTER}
        onClick={handleFilterClick}
        activeId={activeFilter}
      />
      <div className={styles.gallery}>
        <ImageList
          arrOfImages={_imagesH}
          type={"h"}
          handleImageClick={handleImageClick}
        />{" "}
      </div>

      <div className={styles.gallery}>
        <ImageList
          arrOfImages={_imagesV}
          type={"v"}
          handleImageClick={handleImageClick}
        />
      </div>

      {/* Full-Width and Full-Height Swiper Slider */}
      {isSliderVisible && (
        <div className={styles.slider}>
          <Close
            hamburgerColor="light"
            onClick={() => setIsSliderVisible(false)}
          />
          <SwiperComponent
            images={IMAGES_HORIZONTAL.concat(IMAGES_VERTICAL)}
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

interface IImageList {
  arrOfImages: IImage[];
  type: "h" | "v";
  handleImageClick: (index: number) => void;
}

function ImageList({ arrOfImages, type, handleImageClick }: IImageList) {
  const handleOnClick = (index: number) => {
    const newIndex = type === "h" ? index : index + IMAGES_HORIZONTAL.length;
    handleImageClick(newIndex);
  };
  return (
    <>
      {" "}
      {arrOfImages.map((conf: IImage, index: number) => (
        <div
          key={index}
          className={`${styles.imageWrapper} ${
            type === "v" ? styles.vertical : styles.horizontal
          }`}
          onClick={() => handleOnClick(index)}
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
    </>
  );
}
