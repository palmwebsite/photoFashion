"use client";

import { useScreenOrientation } from "@/app/hooks/useScreenOrientation";
import SwiperComponent from "../swiper/SwiperComponent";
import { PHOTOS } from "./conf";
import { useEffect } from "react";

export function MainSlider() {
  const [orientation] = useScreenOrientation();

  useEffect(() => {
    const isLandscape = orientation.includes("landscape");
    const isPortrait = orientation.includes("portrait");
    console.log("Orientation: ", orientation);
  }, [orientation]);
  return (
    <SwiperComponent
      images={PHOTOS}
      wantsTextOnNavigation={true}
      wantsZoomEffect={true}
      wantsCover={true}
    />
  );
}
