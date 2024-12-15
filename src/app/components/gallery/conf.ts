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
  { id: "blurry", alt: "reklaamfoto modellist", tags: ["mood"] },
  { id: "KristiineAutos", alt: "stuudiofoto inimesed grupis", tags: ["reklaam"] },
  { id: "coffee", alt: "moefoto ajastu", tags: ["mood"] },
  { id: "foggy", alt: "moefoto tippmodell", tags: ["mood", "reklaam"] },
  { id: "phone", alt: "portreefoto näitleja Merle Palmiste", tags: ["portree"] },
  { id: "liisi", alt: "muusik Liisi Koiksoni portree", tags: ["portree", "reklaam"] },
  { id: "maarja", alt: "kuulsused Laulja Maarja Liis Ilus", tags: ["portree"] },
  { id: "pink", alt: "fashion", tags: ["mood", "reklaam"] },
  { id: "pintsak", alt: "fashionphotography", tags: ["mood", "reklaam"] },
  { id: "kardin", alt: "portraits", tags: ["mood", "reklaam"] },
  { id: "boyband", alt: "grupifoto bändipilt ansambel Smilers", tags: ["reklaam", "portree"] },
  { id: "puudel", alt: "loomafoto disainer Liisi Eesmaa", tags: [ "mood"] },
  { id: "mic", alt: "portree näitleja Merle Palmiste", tags: ["portree"] },
  { id: "kampsun", alt: "tootefoto modell", tags: ["mood", "reklaam"] },
  { id: "brown", alt: "foto ilupilt", tags: ["mood", "reklaam"] },
  { id: "kana", alt: "eestifotograafia", tags: ["mood"] },
  { id: "suled", alt: "glamuur bueauty shot", tags: ["portree"] },
  { id: "white", alt: "minimalism moefoto", tags: ["mood", "reklaam"] },
  { id: "suits", alt: "buduaar pesupildid", tags: ["mood"] },
  { id: "roosa", alt: "reklaamfotod", tags: ["mood"] },
  { id: "wolf", alt: "foto koeraga", tags: ["reklaam", "mood"] },
];

const _IMAGES_PORTRAIT: IImageBase[] = [
  {
    id: "ylle",
    alt: "portreefoto kuulsast näitlejannast Ülle Kaljustest", tags: ["portree", "reklaam"]
  },
  {
    id: "Liisinukuga",
    alt: "Portreefoto lauljanna Liisi Koiksonist", tags: ["portree", "reklaam"]
  },
  {
    id: "infhrohe",
    alt: "moelooja ja disainer Ivo Nikkolo feklaamfoto interjööris", tags: ["mood", "reklaam"]
  },
  {
    id: "mashaounaga",
    alt: "Glamuurne reklaamfoto modell disainerkleidiga", tags: ["mood", "reklaam"]
  },
  {
    id: "mashahallis",
    alt: "reklaamfoto modell koos koeraga disainerkleidis", tags: ["mood", "reklaam"]
  },
  {
    id: "sikimaskiga",
    alt: "buduaar foto modellist", tags: ["mood"]
  },
  {
    id: "mashabassujuures",
    alt: "moefoto interjööris",
    tags: ["mood", "reklaam"],
  },
  { id: "kleit", alt: "tootefoto", tags: ["mood"] },
  { id: "infhrohe", alt: "mood interjöör", tags: ["mood", "reklaam"] },
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
