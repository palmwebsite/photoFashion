This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Kuidas localhostis vaadata asju (enda arvutis leht käima saada)?

- tee projekt lahti
- tee lahti Visual Studio Code terminal
- kirjuta

```bash
npm run dev
```

Siis ava browseris aadress: localhost:3000

npm run dev pead käivitama ainult ühe korra. Kui muudatuse teed, siis peale refreshi peaksid muudatust localhosti aadressil kohe nägema.

# Kus pilte hoitakse

Kõik lehel kasutuselolevad pildid on kaustas

```bash
public -> images
```

1. pildid peavad olema .webp formaadis
2. pildi nimes võib kasutada ainult tavatähti ja numbreid ja \_ ja -
3. tühikuid ära kasuta

# Esilehe suur slaider

## Kuidas esilehele pilte juurde panna?

Esilehe pildid on määratud:

```bash
src -> app -> components -> mainSlider -> conf
```

Seal failis on kaks erinevat listi.

1. \_IMAGES_LANDSCAPE - see on kõikidel suurtel ekraanidel. Ja mobiilidel siis kui nad on landscape orientatsioonis
2. \_IMAGES_PORTRAIT - see on kasutusel AINULT mobiiliseadmetel kui nad on portrait orientatsioonis. Suurtel ekraanidel seda EI kasutata

Lisa vastavalt \_IMAGES_LANDSCAPE või \_IMAGES_PORTRAIT listi uus element.
Näiteks:

```bash
{
  id: "mic"
  alt: "Mic",
},
```

- id = pildi faili nimi. selle järgi leitakse pilt üles
- alt = pimedatele juhatus, et mis pildi peal on. lihtsalt viisakusest

### Kuidas teksti ja linki lisada?

Samas failis on ka list TEXTS
Seal on tekstis järjekorra järgi. Esimene läheb esimesele slaidile, teine teisele jne

```bash
 {

    h1: "Esimene ülemine tekst",
    h2: "Esimese slaidi alumine tekst",
    href: goToGalleryWithFilter("loom"),
  },
```

- h1 = slaidi ülemine tekst
- h2 = slaidi alumine tekst
- href: link.

Linke saab olla mitu varianti:

- tavaline link. näiteks: "http://www.tartu.ee"
- link kuhugi lehele sinu oma lehel. neid on praegu neli:

1. URLS.contact
2. URLs.home,
3. URLS.about
4. URLS.gallery

- link galerii lehele, kus on vaikimisi filter. selle saad nii:
  goToGalleryWithFilter("loom") - "loom" = filter "loom".

Filter = tag galerii lehel (galerii osas seletan ka neid)

# Galerii

## Kuidas galeriisse pilte juurde panna?

Galerii pildid on määratud:

```bash
src -> app -> components -> gallery -> conf
```

Seal failis on kaks kohta:

1. \_IMAGES_HORIZONTAL - landscape piltide jaoks
2. \_IMAGES_VERTICAL - portrait piltide jaoks

Lisa vastavalt \_IMAGES_LANDSCAPE või \_IMAGES_PORTRAIT listi uus element.
Näiteks:

```bash
{
    id: "blurry",
    alt: "Image 1",
    tags: \["loom", "kleit"\]
}
```

- id = pildi faili nimi. selle järgi leitakse pilt üles
- alt = pimedatele juhatus, et mis pildi peal on. lihtsalt viisakusest
- tags = samas failis määratud filtrite tagid. ühel pildil võib neid olla mitu. nende järgi filtreeritakse pilte galerii lehel

### Kuidas galeriisse filtereid juurde panna?

Samas failis on list FILTER. Sinna pead lisama.
tag - väikeste tähtede ja ilma tühikuteta kirjutatud "tag" - seda on lihtsalt nagu id, seda näha ei jää
label - tekst, mida filtri juures kasutajale kuvatakse
Ära unusta! Selleks, et saaks uue tagi lisada, pead selle lisama ka "AllTags" listi. Selle leiad samast failist!

### Kuidas pilte filtritesse määrata?

Iga pildi juures on property: tags. Sinna lisa filtri "tag". Üks pilt võib kuuluda ka mitmesse filtrisse.  
Tagid pane jutumärkidesse ja eralda komadega

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Kuidas koodi githubi ja vercelisse üles lasta?

Vasakult poolt valid ülalt kolmanda valiku (selle pallikestega). (Source control)
Seal on reas kõik sinu tehtud muudatused.

1. lisa nad ükshaaval +'iga "stagingusse" (no vajuta samal real paremalpool asuvat pluss märki). kui sa seda + märki ei vajuta, siis küsitakse sult commit vajutamisel, et kas tahad kõiki muudatusi kommittida. võid seal ka lihtsalt ok vajutada. siis pole vaja ükshaaval plussiga neid lisada.
2. kirjuta commit message üleval olevale väljale
3. vajuta "commit" - see paneb muudatused ülessaatmist ootama
4. vajuta "sync" - see saadab muudatused githubi

Github saadab muudatused juba ise automaatselt Vercelile

## Näidisleht

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
http://preview.themeforest.net/item/emily-creative-photography-portfolio/full_screen_preview/20752742?clickid=Ucz3WaWGjxyKUIh0tG0fhXFyUkCQTs20PUVkU80&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius
