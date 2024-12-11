import { IImage, IImageBase } from "../dto";
import { IFilter } from "../filter/Filter";

type AllTags = "all" | "reklaam" | "vertical" | "kleit" | "ilus";


// siin on filtrid
// tag = id (kasutaja seda ei näe)
// urlis kasutatakse tagi localhost:3000/galerii:reklaam
// label = see, mida kasutaja näeb
export const FILTER: IFilter<AllTags>[] = [
  { tag: "all", label: "Kõik" },
  { tag: "reklaam", label: "Reklaam" },
  { tag: "kleit", label: "Kleidiga" },
  { tag: "vertical", label: "Vertikaalne" },
  { tag: "ilus", label: "Ilusad tüdrukud" },
];


// id = pildi nimi
// tags = filtirid
// alt'i lihtsalt igno
const _IMAGES_LANDSCAPE: IImageBase[] = [
  { id: "blurry", alt: "Image 1", tags: [] },
  { id: "KristiineAutos", alt: "Image 1", tags: ["reklaam"] },
  { id: "coffee", alt: "Image 2", tags: [] },
  { id: "foggy", alt: "Image 3", tags: ["kleit"] },
  { id: "phone", alt: "Image 3", tags: [] },
  { id: "liisi", alt: "Image 3", tags: [] },
  { id: "maarja", alt: "Image 3", tags: [] },
  { id: "pink", alt: "Image 3", tags: ["reklaam"] },
  { id: "pintsak", alt: "Image 3", tags: [] },
  { id: "kardin", alt: "Image 3", tags: ["kleit", "ilus"] },
  { id: "boyband", alt: "Image 3", tags: [] },
  { id: "puudel", alt: "Image 3", tags: [ "ilus"] },
  { id: "mic", alt: "Image 3", tags: [] },
  { id: "kampsun", alt: "Image 3", tags: [] },
  { id: "brown", alt: "Image 3", tags: [] },
  { id: "kana", alt: "Image 3", tags: ["reklaam"] },
  { id: "suled", alt: "Image 3", tags: [] },
  { id: "white", alt: "Image 3", tags: [] },
  { id: "suits", alt: "Image 3", tags: [] },
  { id: "roosa", alt: "Image 3", tags: [] },
  { id: "wolf", alt: "Image 3", tags: ["reklaam", "kleit"] },
];

const _IMAGES_PORTRAIT: IImageBase[] = [
  {
    id: "mashabassujuures",
    alt: "Image 3",
    tags: ["kleit"],
  },
  { id: "kleit", alt: "Image 3", tags: ["kleit"] },
  { id: "infhrohe", alt: "Image 3", tags: ["kleit"] },
  { id: "piret1", alt: "Image 3", tags: ["vertical"] },
  { id: "kasukad", alt: "Image 3", tags: ["vertical"] },
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

export const IMAGES_LANDSCAPE: IImage[] = _IMAGES_LANDSCAPE.map((image) => {
  return { ...image, isLandscape: true };
});
export const IMAGES_PORTRAIT: IImage[] = _IMAGES_PORTRAIT.map((image) => {
  return { ...image, isLandscape: false };
});
