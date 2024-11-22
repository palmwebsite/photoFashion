import { URLS } from "../nav/urls";
import { ISlide } from "./dto";
import trans from "@/app/locales/translations.et.json";
const main = trans.main;
const cat = trans.cat;

export const PHOTOS: ISlide[] = [
  {
    src: "/images/blurry.webp",
    alt: "Blurry",
    width: 2560,
    height: 1703,
    ...main,
    href: URLS.about,
  },
  {
    src: "/images/brown.webp",

    alt: "Brown",
    width: 2560,
    height: 1707,
    ...cat,
    href: URLS.contact,
  },
  {
    src: "/images/coffee.webp",

    alt: "Coffee",
    width: 2560,
    height: 1697,
    ...main,
    href: URLS.gallery,
  },
  {
    src: "/images/foggy.webp",

    alt: "Foggy",
    width: 2560,
    height: 1707,
    ...main,
    href: URLS.gallery,
  },
  {
    src: "/images/wolf.webp",

    alt: "Wolf",
    width: 2560,
    height: 1703,
    ...main,
    href: URLS.gallery,
  },
];
