export type ColorScheme = "light" | "dark";
export interface IImage {
  alt: string;
  isHorizontal: boolean;
  id: string;
}

export interface ISlide extends IImage {
  title?: ISlideHref;
}

export interface ISlideHref {
  h1: string;
  h2: string;
  href: string;
}
