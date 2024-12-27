import { Page } from "../components/layouts/Page";
import { Paragraph } from "../components/layouts/Paragraph";
import { Header } from "../components/layouts/Header";
import { Description } from "../components/layouts/Description";
import styles from "./style.module.css";
import Image from "next/image";

const texts = {
  title: "FOTOGRAAF MADIS PALM",
  description:
    "Vabakutseline moe, reklaami, portreefotograaf ja koolitaja. Tegutsenud selles valdkonnas üle 20 aasta. Lõpetanud fotograafia eriala Tartu Kõrgemas Kunstikoolis aastal 2002. ",
  paragraph1:
    "Pildistan eelkõige äriklientidele reklaamfotosid, mille hulgas on nii inimestega seotud fotolavastusi kui tootefotot, ürituste pilditamist tuleb samuti ette. Erijuhtudel olen ka pulmi pildistanud, ent suurem osa loomingust on siiski moepildistamine, reklaamfoto ning inimeste portreteerimine. Fotograafia-alaseid koolitusi ja kursuseid teen nii era- kui äriklientidele. ",
  paragraph2:
    "Alustasin oma karjääri analoogfotograafia ajal, minu Pallase lõputööks oli moefoto seeria ajakirjas Stiil, juhendajaks Herkki Erich Merila.",
  paragraph3:
  "Kliendid. Ajakirjadele olen üldse palju pildistanud, tooksin siinkohal Stiili kõrval välja ajakirjad Anne, Annestiil, Cosmopolitan, Elle, Kroonika, Kodukiri, FHM, Playboy, Diivan, Avenüü, Postimees, Äripäev jpt. Kliente on olnud nii Eestist kui mujalt - mõned nimekamad neist: Swedbank, Tele 2, McDonalds, Evian, Ivo Nikkolo, Monton, EMT, Marc & Andre, Kaubamaja, Viru keskus, Kristiine keskus, Ülemiste keskus, Viking Motors, Helsinki Day Spa, Rademar, Estonian Fashion Festival, Tartu Kunstimuuseum, Tallina Linnamuuseum jpt.",
  paragraph4:
  "Koostööpartnerid. Paljud reklaamtöödest on valminud koostöös reklaamifirmadega Kontuur, Idea, Adangels, Adell Taevas, Division. Moeloojatest, stilistidest, juuksuritest ja grimmikunstnikest mõned nimed, kellega on olnud rõõm koostööd teha: Anu Lensment, Liisi Eesmaa, Karolin Kuusik, Jaanus Vahtra, Marju Tammik, Reet Aus, Gerly Tinn, Britt Samosen, Antonio, Katrin Sangla, Anu Konze, Mammu, Piret Sootla, Reet Härmat, Loore Härmat, Katrin Pilk jpt.",
  paragraph5:
  "Koolitused. Olen läbi aastate õpetanud fotograafiat külalisõppejõuna Tartu Kõrgemas Kuntikoolis Pallas ning teinud soovijatele koolitusi alates Kuidas paremini pildistada mobiiltelefoniga kuni täismahus stuudiofoto kursusteni. Võimalikud ka eraviisilised koolitused.",
  paragraph6:
  "Uued kliendid ja koostööpartnerid. Olen alati avatud uutele ja huvitavatele pakkumistele nii pildistama kui koolitama. Võta ühendust, kui midagi siin galeriis nähtust sind kõnetab!"

  };

export default function Minust() {
  return (
    <Page width="900px">
      <Header>{texts.title}</Header>
      <Description>{texts.description}</Description>
      <Image
        src={"/images/madis.jpg"}
        alt={"Madis"}
        width={600}
        height={600}
        priority
        className={styles.image}
      />
      <Paragraph>{texts.paragraph1}</Paragraph>
      <Paragraph>{texts.paragraph2}</Paragraph>
      <Paragraph>{texts.paragraph3}</Paragraph>
      <Paragraph>{texts.paragraph4}</Paragraph>
      <Paragraph>{texts.paragraph5}</Paragraph>
      <Paragraph>{texts.paragraph6}</Paragraph>
    </Page>
  );
}
