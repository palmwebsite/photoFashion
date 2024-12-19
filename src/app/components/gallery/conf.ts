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
  { id: "ajastuketiga", alt: "", tags: ["reklaam", "mood"] },
  { id: "astoriaistub", alt: "", tags: ["reklaam", "mood"] },
  { id: "astoriapiits", alt: "", tags: ["reklaam", "mood"] },
  { id: "astoriatrepil", alt: "", tags: ["reklaam", "mood"] },
  { id: "avihalliga", alt: "", tags: ["reklaam", "mood"] },
  { id: "avikassiga", alt: "", tags: ["reklaam", "mood"] },
  { id: "avikollanelips", alt: "", tags: ["reklaam", "mood"] },
  { id: "baronsbinokkel", alt: "", tags: ["reklaam", "mood"] },
  { id: "baronskylitab", alt: "", tags: ["reklaam", "mood"] },
  { id: "baronsselg", alt: "", tags: ["reklaam", "mood"] },
  { id: "beadiivanil", alt: "", tags: ["reklaam", "mood"] },
  { id: "beamullis", alt: "", tags: ["reklaam", "mood"] },
  { id: "britabarett", alt: "", tags: ["reklaam", "mood"] },
  { id: "eleveider", alt: "", tags: ["reklaam", "mood"] },
  { id: "glamgalHelena", alt: "", tags: ["reklaam", "mood"] },
  { id: "glamgalpeegel", alt: "", tags: ["reklaam", "mood"] },
  { id: "glamgalsuled", alt: "", tags: ["reklaam", "mood"] },
  { id: "glamgalYlle", alt: "", tags: ["reklaam", "mood"] },
  { id: "greispunane", alt: "", tags: ["reklaam", "mood"] },
  { id: "greiskuldne", alt: "", tags: ["reklaam", "mood"] },
  { id: "herkekotiga", alt: "", tags: ["reklaam", "mood"] },
  { id: "herkevarjuga", alt: "", tags: ["reklaam", "mood"] },
  { id: "inastub", alt: "", tags: ["reklaam", "mood"] },
  { id: "inhelkivkott", alt: "", tags: ["reklaam", "mood"] },
  { id: "inkaabu", alt: "", tags: ["reklaam", "mood"] },
  { id: "inkleit", alt: "", tags: ["reklaam", "mood"] },
  { id: "inpunasedvarukad", alt: "", tags: ["reklaam", "mood"] },
  { id: "intoruga", alt: "", tags: ["reklaam", "mood"] },
  { id: "inuhke", alt: "", tags: ["reklaam", "mood"] },
  { id: "itajahendrik", alt: "", tags: ["reklaam", "mood"] },
  { id: "kabid", alt: "", tags: ["reklaam", "mood"] },
  { id: "kailicool", alt: "", tags: ["reklaam", "mood"] },
  { id: "kailipall", alt: "", tags: ["reklaam", "mood"] },
  { id: "karinnuku", alt: "", tags: ["reklaam", "mood"] },
  { id: "kanaga", alt: "", tags: ["reklaam", "mood"] },
  { id: "karintrepil", alt: "", tags: ["reklaam", "mood"] },
  { id: "kartpruun", alt: "", tags: ["reklaam", "mood"] },
  { id: "keipunases", alt: "", tags: ["reklaam", "mood"] },
  { id: "kuumaal", alt: "", tags: ["reklaam", "mood"] },
  { id: "liisilennuk", alt: "", tags: ["reklaam", "mood"] },
  { id: "maarjabens", alt: "", tags: ["reklaam", "mood"] },
  { id: "maarjaootab", alt: "", tags: ["reklaam", "mood"] },
  { id: "maarjareeling", alt: "", tags: ["reklaam", "mood"] },
  { id: "maarjatagurpidi", alt: "", tags: ["reklaam", "mood"] },
  { id: "kabid", alt: "", tags: ["reklaam", "mood"] },
  { id: "marjujaanus", alt: "", tags: ["reklaam", "mood"] },
  { id: "meelipargis", alt: "", tags: ["reklaam", "mood"] },
  { id: "mirteljatam", alt: "", tags: ["reklaam", "mood"] },
  { id: "mustpeakaar", alt: "", tags: ["reklaam", "mood"] },
  { id: "mustpeanukk", alt: "", tags: ["reklaam", "mood"] },
  { id: "mustpeatorud", alt: "", tags: ["reklaam", "mood"] },
  { id: "pesulambid", alt: "", tags: ["reklaam", "mood"] },
  { id: "pesupeegel", alt: "", tags: ["reklaam", "mood"] },
  { id: "pesuvoodi", alt: "", tags: ["reklaam", "mood"] },
  { id: "reetjaanu", alt: "", tags: ["reklaam", "mood"] },
  { id: "sakurolls", alt: "", tags: ["reklaam", "mood"] },
  { id: "sikikoogiga", alt: "", tags: ["reklaam", "mood"] },
  { id: "sofiakaas", alt: "", tags: ["reklaam", "mood"] },
  { id: "syrrkampa", alt: "", tags: ["reklaam", "mood"] },
  { id: "taavitaustaga", alt: "", tags: ["reklaam", "mood"] },
  { id: "tanelsin", alt: "", tags: ["reklaam", "mood"] },
  { id: "tanjasin", alt: "", tags: ["reklaam", "mood"] },
  { id: "tenerifekampa", alt: "", tags: ["reklaam", "mood"] },
  { id: "vanatallinn", alt: "", tags: ["reklaam", "mood"] },
  { id: "vihurimae", alt: "", tags: ["reklaam", "mood"] },
  { id: "viiuldaja", alt: "", tags: ["reklaam", "mood"] },
  { id: "voluounad", alt: "", tags: ["reklaam", "mood"] },
  { id: "yllatus", alt: "", tags: ["reklaam", "mood"] },
  
];

export const IMAGES_LANDSCAPE: IImage[] = _IMAGES_LANDSCAPE.map((image) => {
  return { ...image, isLandscape: true };
});
export const IMAGES_PORTRAIT: IImage[] = _IMAGES_PORTRAIT.map((image) => {
  return { ...image, isLandscape: false };
});
