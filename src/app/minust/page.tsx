import { Page } from "../components/layouts/Page";
import { Paragraph } from "../components/layouts/Paragraph";
import { Header } from "../components/layouts/Header";
import { Description } from "../components/layouts/Description";
import styles from "./style.module.css";
import Image from "next/image";

const texts = {
  title: "Minu elulugu kogu tõde",
  description:
    "Lühike versioon: Minu kirjeldus. Lorem ipsum. Halleluuja. Dios mio, ikka sigacool näen välja küll. Ise ka ei usu. ",
  paragraph1:
    "Pikk versioon: Esimene lõik. Lorem Ipsum. Efficiently morph customer directed internal or organic sources before multidisciplinary users. Credibly disseminate resource maximizing human capital before revolutionary e-services. Collaboratively parallel task resource-leveling markets after professional data. Professionally streamline user-centric benefits without scalable strategic theme areas. Interactively develop backward-compatible expertise through high-payoff supply chains.",
  paragraph2:
    "Teine lõik. Efficiently morph customer directed internal or organic sources before multidisciplinary users. Credibly disseminate resource maximizing human capital before revolutionary e-services. Collaboratively parallel task resource-leveling markets after professional data. Professionally streamline user-centric benefits without scalable strategic theme areas. Interactively develop backward-compatible expertise through high-payoff supply chains.",
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
    </Page>
  );
}
