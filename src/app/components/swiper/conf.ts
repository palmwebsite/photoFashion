import { URLS } from "../nav/urls";
import { ISlide } from "./dto";
import trans from "@/app/locales/translations.et.json";
const main = trans.main;
const cat = trans.cat;

export const PHOTOS: ISlide[] = [
  {
    src: "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",

    alt: "Sample Image",
    width: 1920,
    height: 1080,
    ...main,
    href: URLS.about,
  },
  {
    src: "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI",

    alt: "Sample Image",
    width: 1920,
    height: 1080,
    ...cat,
    href: URLS.contact,
  },
];
