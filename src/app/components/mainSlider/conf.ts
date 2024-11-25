import { IImageBase, ISlide, ISlideHref } from "../dto";
import { goToGalleryWithFilter, URLS } from "../menu/urls";
import trans from "./texts.et.json";

// Kui slaidi lisad, pead siia ka uue teksti lisama (kui talle linki tahad peale)
const TEXTS: ISlideHref[] = [
  {
    h1: trans.firstH1,
    h2: trans.firstH2,
    href: goToGalleryWithFilter("loom"),
  },
  {
    h1: trans.scndH1,
    h2: trans.scndH2,
    href: URLS.about,
  },
  {
    h1: trans.thirdH1,
    h2: trans.thirdH2,
    href: URLS.about,
  },
  {
    h1: trans.fourH1,
    h2: trans.fourH2,
    href: URLS.about,
  },
  {
    h1: trans.fiveH1,
    h2: trans.fiveH2,
    href: URLS.about,
  },
  {
    h1: trans.sixH1,
    h2: trans.sixH2,
    href: URLS.about,
  },
];
const HORIZONTAL_PHOTOS: IImageBase[] = [
  {
    id: "mic",
    alt: "Mic",
  },
  {
    id: "brown",

    alt: "Brown",
  },
  {
    id: "coffee",
    alt: "Coffee",
  },
  {
    id: "foggy",

    alt: "Foggy",
  },
  {
    id: "wolf",

    alt: "Wolf",
  },
  {
    id: "beach",

    alt: "beach",
  },
];

const VERTICAL_PHOTOS: IImageBase[] = [
  {
    id: "kasukad",
    alt: "kasukad",
  },
  {
    id: "kleit",

    alt: "kleit",
  },
  {
    id: "seelik",
    alt: "seelik",
  },
];

export function getPhotos(type: "vertical" | "horizontal"): ISlide[] {
  const _images = type === "horizontal" ? HORIZONTAL_PHOTOS : VERTICAL_PHOTOS;
  return _images.map((img, index: number) => {
    const slide: ISlide = {
      ...img,
      title: TEXTS[index],
      isHorizontal: type === "horizontal",
    };
    return slide;
  });
}
