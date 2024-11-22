import { nav } from "@/app/locales/translations.et.json";

interface IUrl {
  label: string;
  url: string;
}

export const URLS = {
  contact: "kontakt",
  home: "/",
  about: "minust",
  gallery: "galerii",
};

export const NAVS: IUrl[] = [
  { label: nav.home, url: URLS.home },
  { label: nav.contact, url: URLS.contact },
  { label: nav.home, url: URLS.home },
  { label: nav.gallery, url: URLS.gallery },
];
