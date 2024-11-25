import { IImage, IImageBase } from "../dto";
import { IFilter } from "../filter/Filter";

type FilterType = "all" | "loom" | "vertical" | "kleit" | "ilus";
export const FILTER: IFilter<FilterType>[] = [
  { id: "all", label: "Kõik" },
  { id: "loom", label: "Loomaga" },
  { id: "kleit", label: "Kleidiga" },
  { id: "vertical", label: "Vertikaalne" },
  { id: "ilus", label: "Ilusad tüdrukud" },
];

const _IMAGES_HORIZONTAL: IImageBase[] = [
  { id: "blurry", alt: "Image 1", tags: [""] },
  { id: "coffee", alt: "Image 2" },
  { id: "foggy", alt: "Image 3", tags: ["kleit"] },
  { id: "phone", alt: "Image 3" },
  { id: "liisi", alt: "Image 3" },
  { id: "maarja", alt: "Image 3" },
  { id: "pink", alt: "Image 3" },
  { id: "pintsak", alt: "Image 3" },
  { id: "kardin", alt: "Image 3", tags: ["kleit", "ilus"] },
  { id: "boyband", alt: "Image 3" },
  { id: "puudel", alt: "Image 3", tags: ["loom", "ilus"] },
  { id: "mic", alt: "Image 3" },
  { id: "kampsun", alt: "Image 3" },
  { id: "brown", alt: "Image 3" },
  { id: "kana", alt: "Image 3", tags: ["loom"] },
  { id: "suled", alt: "Image 3" },
  { id: "white", alt: "Image 3" },
  { id: "suits", alt: "Image 3" },
  { id: "roosa", alt: "Image 3" },
  { id: "suled", alt: "Image 3" },
  { id: "wolf", alt: "Image 3", tags: ["loom", "kleit"] },
];

const _IMAGES_VERTICAL: IImageBase[] = [
  {
    id: "mashabassujuures",
    alt: "Image 3",

    tags: ["kleit"],
  },
  { id: "kleit", alt: "Image 3", tags: ["kleit"] },
  { id: "piret1", alt: "Image 3", tags: ["vertical"] },
  {
    id: "piret2",
    alt: "Image 3",

    tags: ["vertical", "kleit"],
  },
  {
    id: "seelik",
    alt: "Image 3",

    tags: ["vertical", "kleit"],
  },
  { id: "binokkel", alt: "Image 3", tags: ["vertical"] },
  { id: "kasukas", alt: "Image 3", tags: ["vertical"] },
];

export const IMAGES_HORIZONTAL: IImage[] = _IMAGES_HORIZONTAL.map((image) => {
  return { ...image, isHorizontal: true };
});
export const IMAGES_VERTICAL: IImage[] = _IMAGES_VERTICAL.map((image) => {
  return { ...image, isHorizontal: false };
});
