import { IImage, IImageBase } from "../dto";
import { IFilter } from "../filter/Filter";

type AllTags = "all" | "reklaam" | "portree" | "mood" | "print";


// siin on filtrid
// tag = id (kasutaja seda ei näe)
// urlis kasutatakse tagi localhost:3000/galerii:reklaam
// label = see, mida kasutaja näeb
export const FILTER: IFilter<AllTags>[] = [
  { tag: "all", label: "Kõik" },
  { tag: "reklaam", label: "Reklaam" },
  { tag: "mood", label: "Mood" },
  { tag: "portree", label: "Portree" },
  { tag: "print", label: "Print" },
];


// id = pildi nimi
// tags = filtirid
// alt'i lihtsalt igno
const _IMAGES_LANDSCAPE: IImageBase[] = [
  { id: "blurry", alt: "reklaamfoto", tags: ["mood"] },
  { id: "KristiineAutos", alt: "stuudiofoto", tags: ["reklaam"] },
  { id: "coffee", alt: "moefoto", tags: ["mood"] },
  { id: "foggy", alt: "moefoto", tags: ["mood", "reklaam"] },
  { id: "phone", alt: "portreefoto", tags: ["portree"] },
  { id: "liisi", alt: "muusik", tags: ["portree", "reklaam"] },
  { id: "maarja", alt: "kuulsused", tags: ["portree"] },
  { id: "pink", alt: "fashion", tags: ["mood", "reklaam"] },
  { id: "pintsak", alt: "fashionphotography", tags: ["mood", "reklaam"] },
  { id: "kardin", alt: "portraits", tags: ["mood", "reklaam"] },
  { id: "boyband", alt: "grupifoto", tags: ["reklaam", "portree"] },
  { id: "puudel", alt: "loomafoto", tags: [ "mood"] },
  { id: "mic", alt: "portree", tags: ["portree"] },
  { id: "kampsun", alt: "tootefoto", tags: ["mood", "reklaam"] },
  { id: "brown", alt: "foto", tags: ["mood", "reklaam"] },
  { id: "kana", alt: "eestifotograafia", tags: ["mood"] },
  { id: "suled", alt: "glamuur", tags: ["portree"] },
  { id: "white", alt: "minimalism", tags: ["mood", "reklaam"] },
  { id: "suits", alt: "buduaar", tags: ["mood"] },
  { id: "roosa", alt: "reklaamfotod", tags: ["mood"] },
  { id: "wolf", alt: "foto", tags: ["reklaam", "mood"] },
];

const _IMAGES_PORTRAIT: IImageBase[] = [
  {
    id: "mashabassujuures",
    alt: "Image 3",
    tags: ["mood", "reklaam"],
  },
  { id: "kleit", alt: "tootefoto", tags: ["mood"] },
  { id: "infhrohe", alt: "mood", tags: ["mood", "reklaam"] },
  { id: "piret1", alt: "actress", tags: ["mood"] },
  { id: "kasukad", alt: "fotograafia", tags: ["mood"] },
  {
    id: "piret2",
    alt: "fotod",
    tags: ["mood"],
  },
  {
    id: "seelik",
    alt: "moefoto",
    tags: ["mood"],
  },
  { id: "binokkel", alt: "moefoto looduses", tags: ["mood"] },
  { id: "kasukas", alt: "glamuurne moefoto", tags: ["mood"] },
];

export const IMAGES_LANDSCAPE: IImage[] = _IMAGES_LANDSCAPE.map((image) => {
  return { ...image, isLandscape: true };
});
export const IMAGES_PORTRAIT: IImage[] = _IMAGES_PORTRAIT.map((image) => {
  return { ...image, isLandscape: false };
});
