"use client";

import { useScreenOrientation } from "@/app/hooks/useScreenOrientation";
import SwiperComponent from "../swiper/SwiperComponent";
import { getPhotos, Orientation } from "./conf";
import { useEffect, useState } from "react";
import { ISlide } from "../dto";

export function MainSlider() {
  const [images, setImages] = useState<ISlide[]>([]);
  const [orientation] = useScreenOrientation();

  useEffect(() => {
    const isPortrait = orientation.includes("portrait");
    let _images = [];
    if (isPortrait) {
      _images = getPhotos(Orientation.Portrait);
    } else {
      _images = getPhotos(Orientation.Landscape);
    }
    setImages(_images);
  }, [orientation]);
  return (
    <SwiperComponent
      images={images}
      wantsTextOnNavigation={true}
      wantsZoomEffect={true}
      wantsCover={true}
    />
  );
}
