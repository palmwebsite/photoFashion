import trans from "@/app/locales/translations.et.json";
import { TagType } from "../gallery/conf";
const nav = trans.nav;
interface IUrl {
  label: string;
  description: string;
  url: string;
}

export const URLS = {
  contact: "kontakt",
  home: "/",
  about: "minust",
  gallery: "galerii",
};

export function goToGalleryWithFilter(filter: TagType[]): string {
  const link = `${URLS.gallery}:${filter.join(",")}`;
  return encodeURIComponent(link);
}

export const NAVS: IUrl[] = [
  { label: nav.home, url: URLS.home, description: nav.homeDesc },
  { label: nav.contact, url: URLS.contact, description: nav.contactDesc },
  { label: nav.about, url: URLS.about, description: nav.aboutDesc },
  { label: nav.gallery, url: URLS.gallery, description: nav.galleryDesc },
];
