import { IImageBase, ISlide, ISlideHref } from "../dto";
import { goToGalleryWithFilter, URLS } from "../menu/urls";

// samad tekstid lähevad nii portrait kui landscape piltidele
// href = link kuhu iganes tahad, et lingiks
// kui tahad linkida galeriis mingile filtrile, siis:
// href: goToGalleryWithFilter("loom"), - näiteks see läheb galrii lehele, kus tag = "loom"

const TEXTS: ISlideHref[] = [
  {
    // esimese slaidi tekstid ja link
    h1: "Esimene ülemine tekst",
    h2: "Esimese slaidi alumine tekst",
    href: goToGalleryWithFilter("reklaam"),
  },
  {
    // teise slaidi tekstid ja link
    h1: "Teen kõike raha eest!",
    h2: "Kae perrä",
    href: URLS.about,
  },
  {
    // kolmanda slaidi tekstid ja link
    h1: "Kassid ruulivad",
    h2: "Ilus elu",
    href: URLS.gallery,
  },
  {
    h1: "Neljas",
    h2: "Kah neljas",
    href: URLS.about,
  },
  {
    h1: "Viies",
    h2: "Kah viies",
    href: URLS.about,
  },
  {
    h1: "Kuues",
    h2: "Kuuuuuuuuueeeees",
    href: URLS.about,
  },
];

// Landscape fotod
const _IMAGES_LANDSCAPE: IImageBase[] = [
  {
    id: "mic",
    alt: "portreefoto näitlejast Merle Palmiste",
  },
  {
    id: "brown",

    alt: "reklaamfoto kõrgmood disainer Ivo Nikkolo",
  },
  {
    id: "coffee",
    alt: "ajastu foto Kaubamaja reklaam",
  },
  {
    id: "foggy",
    alt: "kunstline foto reklaamfoto",
  },
  {
    id: "wolf",
    alt: "reklaamfoto modellist koeraga",
  },
  {
    id: "phone",
    alt: "portreefoto filmilik",
  },
];

// Portrait fotod
const _IMAGES_PORTRAIT: IImageBase[] = [
  {
    id: "ylle",
    alt: "portreefoto kuulsast näitlejannast Ülle Kaljustest",
  },
  {
    id: "Liisinukuga",
    alt: "Portreefoto lauljanna Liisi Koiksonist",
  },
  {
    id: "infhrohe",
    alt: "moelooja ja disainer Ivo Nikkolo feklaamfoto interjööris",
  },
  {
    id: "mashaounaga",
    alt: "Glamuurne reklaamfoto modell disainerkleidiga",
  },
  {
    id: "mashahallis",
    alt: "reklaamfoto modell koos koeraga disainerkleidis",
  },
  {
    id: "sikimaskiga",
    alt: "buduaar foto modellist",
  },
];

export enum Orientation {
  Landscape,
  Portrait,
}
export function getPhotos(type: Orientation): ISlide[] {
  const _images =
    type === Orientation.Landscape ? _IMAGES_LANDSCAPE : _IMAGES_PORTRAIT;
  return _images.map((img, index: number) => {
    const slide: ISlide = {
      ...img,
      title: TEXTS[index],
      isLandscape: type === Orientation.Landscape,
    };
    return slide;
  });
}
