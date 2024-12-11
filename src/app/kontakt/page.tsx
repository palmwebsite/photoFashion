import { Description } from "../components/layouts/Description";
import { Header } from "../components/layouts/Header";
import { Page } from "../components/layouts/Page";
import { IListItem, List } from "../components/layouts/List";

const texts = {
  title: "Kontakt",
  description: "Booki mind pildistama",
  email: "email@email label. see on label",
  phone: "telefoninumber",
};
const CONTACTS: IListItem[] = [
  { label: texts.email, value: "päris emaili aadress@email.com" },
  { label: texts.phone, value: "+3725293128" },
];

export default function Kontakt() {
  return (
    <Page width="900px">
      <Header>{texts.title}</Header>
      <Description>{texts.description}</Description>
      <List arr={CONTACTS} />
    </Page>
  );
}
