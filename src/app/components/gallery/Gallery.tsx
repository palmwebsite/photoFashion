"use client"; // Only needed in the App Router

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { FILTER, IMAGES_LANDSCAPE, IMAGES_PORTRAIT } from "./conf";

import SwiperComponent from "../swiper/SwiperComponent";
import { Close } from "../hamburger/Close";
import { IImage } from "../dto";
import { Page } from "../layouts/Page";
import { Filter } from "../filter/Filter";

interface IProps {
  filterId: string;
}

export function Gallery(props: IProps) {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(
    FILTER.some((f) => f.tag === props.filterId) ? props.filterId : "all"
  );
  const [_imagesH, setImagesH] = useState<IImage[]>([]);
  const [_imagesV, setImagesV] = useState<IImage[]>([]);

  useEffect(() => {
    const filter: (image: IImage) => boolean = (image) =>
      image.tags?.includes(activeFilter) || activeFilter === "all";
    setImagesH(IMAGES_LANDSCAPE.filter((image) => filter(image)));
    setImagesV(IMAGES_PORTRAIT.filter((image) => filter(image)));
  }, [activeFilter]);

  const handleImageClick = (index: number) => {
    setInitialIndex(index);
    setIsSliderVisible(true); // Show the slider when an image is clicked
  };

  const handleFilterClick = (id: string) => {
    setActiveFilter(id);
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
          horizontalImageLength={_imagesH.length}
        />{" "}
      </div>

      <div className={styles.gallery}>
        <ImageList
          arrOfImages={_imagesV}
          type={"v"}
          handleImageClick={handleImageClick}
          horizontalImageLength={_imagesH.length}
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
            images={_imagesH.concat(_imagesV)}
            wantsTextOnNavigation={false}
            initialIndex={initialIndex}
            wantsZoomEffect={false}
            wantsCover={false}
          />
        </div>
      )}
    </Page>
  );
}

interface IImageList {
  arrOfImages: IImage[];
  type: "h" | "v";
  handleImageClick: (index: number) => void;
  horizontalImageLength: number;
}

function ImageList({
  arrOfImages,
  type,
  handleImageClick,
  horizontalImageLength,
}: IImageList) {
  const isHorizontal = type === "h";
  const handleOnClick = (index: number) => {
    const newIndex = isHorizontal ? index : index + horizontalImageLength;
    handleImageClick(newIndex);
  };
  return (
    <>
      {" "}
      {arrOfImages.map((conf: IImage, index: number) => (
        <div
          key={index}
          className={`${styles.imageWrapper} ${
            isHorizontal ? styles.horizontal : styles.vertical
          }`}
          onClick={() => handleOnClick(index)}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={`/images/${conf.id}.webp`}
            alt={conf.alt}
            width={isHorizontal ? 800 : 600}
            height={isHorizontal ? 600 : 800}
            className={styles.image}
          />
        </div>
      ))}
    </>
  );
}
