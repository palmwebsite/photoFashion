import trans from "./texts.et.json";
import { Page } from "../components/layouts/Page";
import { Paragraph } from "../components/layouts/Paragraph";
import { Header } from "../components/layouts/Header";
import { Description } from "../components/layouts/Description";
import Image from "next/image";

export default function About() {
  return (
    <Page>
      <Header>{trans.title}</Header>
      <Description>{trans.description}</Description>
      <Image
        src={"/images/madis.jpg"}
        alt={"Madis"}
        width={600}
        height={600}
        priority
      />
      <Paragraph></Paragraph>
      <Paragraph>{trans.p1}</Paragraph>
      <Paragraph>{trans.p2}</Paragraph>
    </Page>
  );
}
