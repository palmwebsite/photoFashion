import { IImage, IImageBase } from "../dto";
import { IFilter } from "../filter/Filter";

type AllTags = "all" | "reklaam" | "portree" | "mood" | "grupp";


// siin on filtrid
// tag = id (kasutaja seda ei näe)
// urlis kasutatakse tagi localhost:3000/galerii:reklaam
// label = see, mida kasutaja näeb
export const FILTER: IFilter<AllTags>[] = [
  { tag: "all", label: "Kõik" },
  { tag: "reklaam", label: "Reklaam" },
  { tag: "mood", label: "Mood" },
  { tag: "portree", label: "Portree" },
  { tag: "grupp", label: "Grupp" },
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
  { id: "puudel", alt: "loomafoto disainer Liisi Eesmaa", tags: [ "mood"] },
  { id: "mic", alt: "portree näitleja Merle Palmiste", tags: ["portree"] },
  { id: "kampsun", alt: "tootefoto modell", tags: ["mood", "reklaam"] },
  { id: "brown", alt: "foto ilupilt", tags: ["mood", "reklaam"] },
  { id: "kana", alt: "eestifotograafia", tags: ["mood"] },
  { id: "white", alt: "minimalism moefoto", tags: ["mood", "reklaam"] },
  { id: "suits", alt: "buduaar pesupildid", tags: ["mood"] },
  { id: "roosa", alt: "reklaamfotod", tags: ["mood"] },
  { id: "wolf", alt: "foto koeraga", tags: ["reklaam", "mood"] },
  { id: "aero", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "antoniusejanes", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "terjepastell", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "beavent", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "britapeeglid", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "gymbeach", alt: "fotograafia", tags: ["reklaam", "mood", "grupp"] },
  { id: "helengaraaz", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inbeez", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "ingranaat", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inistubmaas", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inmv", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inoranz", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inrannatool", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "intossastmed", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "intossotse", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "kontuurlab", alt: "fotograafia", tags: ["reklaam", "mood", "grupp"] },
  { id: "boyband", alt: "grupifoto bändipilt ansambel Smilers", tags: ["reklaam", "portree", "grupp"] },
  { id: "stereovalge", alt: "fotograafia", tags: ["reklaam", "mood", "grupp"] },
  { id: "kriskarneval", alt: "fotograafia", tags: ["reklaam", "mood", "grupp"] },
  { id: "krispillid", alt: "fotograafia", tags: ["reklaam", "mood", "grupp"] },
  { id: "laurafoto", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "talvemuinasjutt", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "maarjalokid", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "merlepildid", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "nikonbokeh", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "rokimehed", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "ruttkott", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "ruudulised", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "sallendab", alt: "fotograafia", tags: ["reklaam", "mood"] },
  
  
 
];

const _IMAGES_PORTRAIT: IImageBase[] = [
  {
    id: "ylle",
    alt: "portreefoto kuulsast näitlejannast Ülle Kaljustest", tags: ["portree", "reklaam"]
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
  { id: "ajastuketiga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "astoriaistub", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "astoriapiits", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "astoriatrepil", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "avihalliga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "avikassiga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "avikollanelips", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "baronsbinokkel", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "baronskylitab", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "baronsselg", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "beadiivanil", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "beamullis", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "britabarett", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "eleveider", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "glamgalHelena", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "glamgalpeegel", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "glamgalsuled", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "glamgalYlle", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "dance", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "greispunane", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "greiskuldne", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "herkekotiga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "herkevarjuga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inastub", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inhelkivkott", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inkaabu", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inkleit", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inpunasedvarukad", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "intoruga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "inuhke", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "itajahendrik", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "kabid", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "kailicool", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "kailipall", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "karinnuku", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "kanaga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "karintrepil", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "eleoistub", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "keipunases", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "kuumaal", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "liisilennuk", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "maarjabens", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "maarjaootab", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "maarjareeling", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "maarjatagurpidi", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "kabid", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "marjujaanus", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "meelipargis", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "mirteljatam", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "mustpeakaar", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "mustpeanukk", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "mustpeatorud", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "pesulambid", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "pesupeegel", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "pesuvoodi", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "reetjaanu", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "sakurolls", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "sikikoogiga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "sofiakaas", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "syrrkampa", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "taavitaustaga", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "tanelsin", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "tanjasin", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "tenerifekampa", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "vanatallinn", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "vihurimae", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "viiuldaja", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "voluounad", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "yllatus", alt: "fotograafia", tags: ["reklaam", "mood"] },
  { id: "antoniusepotid", alt: "fotograafia", tags: ["reklaam", "mood"] },
  
];

export const IMAGES_LANDSCAPE: IImage[] = _IMAGES_LANDSCAPE.map((image) => {
  return { ...image, isLandscape: true };
});
export const IMAGES_PORTRAIT: IImage[] = _IMAGES_PORTRAIT.map((image) => {
  return { ...image, isLandscape: false };
});
