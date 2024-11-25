import { ISlide } from "../dto";
import { goToGalleryWithFilter, URLS } from "../menu/urls";
import trans from "./texts.et.json";

export const PHOTOS: ISlide[] = [
  {
    id: "mic",
    alt: "Mic",
    isHorizontal: true,
    title: {
      h1: trans.firstH1,
      h2: trans.firstH2,
      href: goToGalleryWithFilter("loom"),
    },
  },
  {
    id: "brown",

    alt: "Brown",
    isHorizontal: true,
    title: {
      h1: trans.scndH1,
      h2: trans.scndH2,
      href: URLS.about,
    },
  },
  {
    id: "coffee",
    alt: "Coffee",
    isHorizontal: true,
    title: {
      h1: trans.thirdH1,
      h2: trans.thirdH2,
      href: URLS.about,
    },
  },
  {
    id: "foggy",

    alt: "Foggy",
    isHorizontal: true,
    title: {
      h1: trans.fourH1,
      h2: trans.fourH2,
      href: URLS.about,
    },
  },
  {
    id: "wolf",

    alt: "Wolf",
    isHorizontal: true,
    title: {
      h1: trans.fiveH1,
      h2: trans.fiveH2,
      href: URLS.about,
    },
  },
  {
    id: "beach",

    alt: "beach",
    isHorizontal: true,
    title: {
      h1: trans.sixH1,
      h2: trans.sixH2,
      href: URLS.about,
    },
  },
];
