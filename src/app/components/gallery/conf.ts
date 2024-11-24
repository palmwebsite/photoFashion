import { IImage } from "../dto";
import { IFilter } from "../filter/Filter";

type FilterType = "all" | "loom" | "vertical" | "kleit" | "ilus";
export const FILTER: IFilter<FilterType>[] = [
  { id: "all", label: "Kõik" },
  { id: "loom", label: "Loomaga" },
  { id: "kleit", label: "Kleidiga" },
  { id: "vertical", label: "Vertikaalne" },
  { id: "ilus", label: "Ilusad tüdrukud" },
];

export const IMAGES_HORIZONTAL: IImage[] = [
  { id: "blurry", alt: "Image 1", isHorizontal: true, tags: [""] },
  { id: "coffee", alt: "Image 2", isHorizontal: true },
  { id: "foggy", alt: "Image 3", isHorizontal: true, tags: ["kleit"] },
  { id: "phone", alt: "Image 3", isHorizontal: true },
  { id: "liisi", alt: "Image 3", isHorizontal: true },
  { id: "maarja", alt: "Image 3", isHorizontal: true },
  { id: "pink", alt: "Image 3", isHorizontal: true },
  { id: "pintsak", alt: "Image 3", isHorizontal: true },
  { id: "kardin", alt: "Image 3", isHorizontal: true, tags: ["kleit", "ilus"] },
  { id: "boyband", alt: "Image 3", isHorizontal: true },
  { id: "puudel", alt: "Image 3", isHorizontal: true, tags: ["loom", "ilus"] },
  { id: "mic", alt: "Image 3", isHorizontal: true },
  { id: "kampsun", alt: "Image 3", isHorizontal: true },
  { id: "brown", alt: "Image 3", isHorizontal: true },
  { id: "kana", alt: "Image 3", isHorizontal: true, tags: ["loom"] },
  { id: "suled", alt: "Image 3", isHorizontal: true },
  { id: "white", alt: "Image 3", isHorizontal: true },
  { id: "suits", alt: "Image 3", isHorizontal: true },
  { id: "roosa", alt: "Image 3", isHorizontal: true },
  { id: "suled", alt: "Image 3", isHorizontal: true },
  { id: "wolf", alt: "Image 3", isHorizontal: true, tags: ["loom", "kleit"] },
];

export const IMAGES_VERTICAL: IImage[] = [
  {
    id: "mashabassujuures",
    alt: "Image 3",
    isHorizontal: false,
    tags: ["kleit"],
  },
  { id: "kleit", alt: "Image 3", isHorizontal: false, tags: ["kleit"] },
  { id: "piret1", alt: "Image 3", isHorizontal: false, tags: ["vertical"] },
  {
    id: "piret2",
    alt: "Image 3",
    isHorizontal: false,
    tags: ["vertical", "kleit"],
  },
  {
    id: "seelik",
    alt: "Image 3",
    isHorizontal: false,
    tags: ["vertical", "kleit"],
  },
  { id: "binokkel", alt: "Image 3", isHorizontal: false, tags: ["vertical"] },
  { id: "kasukas", alt: "Image 3", isHorizontal: false, tags: ["vertical"] },
];
