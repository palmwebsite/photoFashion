import { TagType } from "./gallery/conf";

export type ColorScheme = "light" | "dark";
export interface IImageBase {
  alt: string;
  id: string;
  tags?: TagType[];
}

export interface IImage extends IImageBase {
  isLandscape: boolean;
}

export interface ISlide extends IImage {
  title?: ISlideHref;
}

export interface ISlideHref {
  h1: string;
  h2: string;
  href: string;
}
