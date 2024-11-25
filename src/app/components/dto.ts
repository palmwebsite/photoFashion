export type ColorScheme = "light" | "dark";
export interface IImageBase {
  alt: string;
  id: string;
  tags?: string[];
}

export interface IImage extends IImageBase {
  isHorizontal: boolean;
}

export interface ISlide extends IImage {
  title?: ISlideHref;
}

export interface ISlideHref {
  h1: string;
  h2: string;
  href: string;
}
