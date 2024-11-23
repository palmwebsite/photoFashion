import { Description } from "../components/layouts/Description";
import { Header } from "../components/layouts/Header";
import { Page } from "../components/layouts/Page";
import { List } from "../components/layouts/List";
import trans from "./texts.et.json";
import { CONTACTS } from "./conf";

export default function Kontakt() {
  return (
    <Page width="900px">
      <Header>{trans.title}</Header>
      <Description>{trans.description}</Description>
      <List arr={CONTACTS} />
    </Page>
  );
}
