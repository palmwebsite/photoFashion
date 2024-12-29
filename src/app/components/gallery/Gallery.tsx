"use client"; // Only needed in the App Router

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import {
  TagType,
  FILTER as FILTERS,
  IMAGES_LANDSCAPE,
  IMAGES_PORTRAIT,
} from "./conf";

import SwiperComponent from "../swiper/SwiperComponent";
import { Close } from "../hamburger/Close";
import { IImage } from "../dto";
import { Page } from "../layouts/Page";
import { Filter } from "../filter/Filter";

interface IProps {
  filterId: string;
}

export function Gallery(props: IProps) {
  const propsFilterId = props.filterId;
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<TagType[] | undefined>();
  const [_imagesH, setImagesH] = useState<IImage[]>([]);
  const [_imagesV, setImagesV] = useState<IImage[]>([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false); // State for scroll-to-top button

  useEffect(() => {
    const filterIds: TagType[] = (propsFilterId || "").split(",") as TagType[];
    const validFilters = filterIds.filter((filterId: TagType) =>
      FILTERS.some((f) => f.tag === filterId)
    );
    if (!!validFilters && validFilters.length > 0) {
      setActiveFilter(validFilters);
    } else {
      setActiveFilter(["all"]);
    }
  }, [propsFilterId]);

  useEffect(() => {
    if (!!activeFilter && activeFilter.length > 0) {
      const filter: (image: IImage) => boolean = (image) => {
        if ((activeFilter || []).includes("all")) {
          return true;
        } else {
          const include = (image.tags || []).some((tag) =>
            activeFilter.includes(tag)
          );
          return include;
        }
      };
      setImagesH(IMAGES_LANDSCAPE.filter((image) => filter(image)));
      setImagesV(IMAGES_PORTRAIT.filter((image) => filter(image)));
    }
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  const handleImageClick = (index: number) => {
    setInitialIndex(index);
    setIsSliderVisible(true); // Show the slider when an image is clicked
  };

  const handleFilterClick = (id: TagType) => {
    setActiveFilter([id]);
  };

  return (
    <Page>
      <Filter
        arr={FILTERS}
        onClick={handleFilterClick}
        activeIds={activeFilter}
      />
      <div className={styles.gallery}>
        <ImageList
          arrOfImages={_imagesH}
          type={"h"}
          handleImageClick={handleImageClick}
          horizontalImageLength={_imagesH.length}
        />
      </div>

      <div className={styles.gallery}>
        <ImageList
          arrOfImages={_imagesV}
          type={"v"}
          handleImageClick={handleImageClick}
          horizontalImageLength={_imagesH.length}
        />
      </div>

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

      {showScrollToTop && (
        <button
          onClick={handleScrollToTop}
          className={styles.scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
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
