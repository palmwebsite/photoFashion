import { IImageBase, ISlide, ISlideHref } from "../dto";
import { goToGalleryWithFilter, URLS } from "../menu/urls";

// samad tekstid lähevad nii portrait kui landscape piltidele
// href = link kuhu iganes tahad, et lingiks
// kui tahad linkida galeriis mingile filtrile, siis:
// href: goToGalleryWithFilter("loom"), - näiteks see läheb galrii lehele, kus tag = "loom"

const TEXTS: ISlideHref[] = [
  {
    // esimese slaidi tekstid ja link
    h1: "madis palm",
    h2: "vabakutseline fotograaf - reklaamfotod",
    href: goToGalleryWithFilter("all"),
  },
  {
    // teise slaidi tekstid ja link
    h1: "madis palm",
    h2: "portree- ja moefotod",
    href: URLS.about,
  },
  {
    // kolmanda slaidi tekstid ja link
    h1: "madis palm",
    h2: "stuudiofotod ja fotod interjööris",
    href: URLS.gallery,
  },
  {
    h1: "madis palm",
    h2: "glamuuri ja ilupildid",
    href: URLS.about,
  },
  {
    h1: "madis palm",
    h2: "fotolavastused",
    href: URLS.about,
  },
  {
    h1: "madis palm",
    h2: "fotograafia alased koolitused",
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
    id: "mashapruun",

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
