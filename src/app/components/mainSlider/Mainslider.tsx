import SwiperComponent from "../swiper/SwiperComponent";
import { PHOTOS } from "./conf";

export function MainSlider() {
  return (
    <SwiperComponent
      images={PHOTOS}
      wantsTextOnNavigation={true}
      wantsZoomEffect={true}
      wantsCover={true}
    />
  );
}
