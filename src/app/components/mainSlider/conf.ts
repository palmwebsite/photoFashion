import { ISlide } from "../dto";
import { URLS } from "../nav/urls";
import trans from "@/app/locales/translations.et.json";
const main = trans.main;
const cat = trans.cat;

export const PHOTOS: ISlide[] = [
  {
    id: "blurry",
    alt: "Blurry",
    width: 2560,
    height: 1703,
    title: { ...main, href: URLS.about },
  },
  {
    id: "brown",

    alt: "Brown",
    width: 2560,
    height: 1707,
    title: { ...cat, href: URLS.about },
  },
  {
    id: "coffee",
    alt: "Coffee",
    width: 2560,
    height: 1697,
    title: { ...main, href: URLS.gallery },
  },
  {
    id: "foggy",

    alt: "Foggy",
    width: 2560,
    height: 1707,
    title: { ...cat, href: URLS.about },
  },
  {
    id: "wolf",

    alt: "Wolf",
    width: 2560,
    height: 1703,
    title: { ...main, href: URLS.about },
  },
];
