import { ISlide } from "../dto";
import { URLS } from "../menu/urls";
import trans from "./texts.et.json";

export const PHOTOS: ISlide[] = [
  {
    id: "mic",
    alt: "Mic",
    isHorizontal: true,
    title: {
      h1: trans.firstH1,
      h2: trans.main.h2,
      href: URLS.about,
    },
  },
  {
    id: "brown",

    alt: "Brown",
    isHorizontal: true,
    title: {
      h1: trans.main.h1,
      h2: trans.main.h2,
      href: URLS.about,
    },
  },
  {
    id: "coffee",
    alt: "Coffee",
    isHorizontal: true,
    title: {
      h1: trans.main.h1,
      h2: trans.main.h2,
      href: URLS.about,
    },
  },
  {
    id: "foggy",

    alt: "Foggy",
    isHorizontal: true,
    title: {
      h1: trans.main.h1,
      h2: trans.main.h2,
      href: URLS.about,
    },
  },
  {
    id: "wolf",

    alt: "Wolf",
    isHorizontal: true,
    title: {
      h1: trans.main.h1,
      h2: trans.main.h2,
      href: URLS.about,
    },
  },
];
