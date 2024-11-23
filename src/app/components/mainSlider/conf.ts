import { ISlide } from "../dto";
import { URLS } from "../menu/urls";
import trans from "@/app/locales/translations.et.json";
const main = trans.main;
const cat = trans.cat;

export const PHOTOS: ISlide[] = [
  {
    id: "mic",
    alt: "Mic",
    isHorizontal: true,
    title: { ...main, href: URLS.about },
  },
  {
    id: "brown",

    alt: "Brown",
    isHorizontal: true,
    title: { ...cat, href: URLS.about },
  },
  {
    id: "coffee",
    alt: "Coffee",
    isHorizontal: true,
    title: { ...main, href: URLS.gallery },
  },
  {
    id: "foggy",

    alt: "Foggy",
    isHorizontal: true,
    title: { ...cat, href: URLS.about },
  },
  {
    id: "wolf",

    alt: "Wolf",
    isHorizontal: true,
    title: { ...main, href: URLS.about },
  },
];
