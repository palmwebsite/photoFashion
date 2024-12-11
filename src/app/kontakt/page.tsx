import { Description } from "../components/layouts/Description";
import { Header } from "../components/layouts/Header";
import { Page } from "../components/layouts/Page";
import { IListItem, List } from "../components/layouts/List";

const texts = {
  title: "Kontakt",
  description: "",
  email: "",
  phone: "",
};
const CONTACTS: IListItem[] = [
  { label: texts.email, value: "madis.palm@gmail.com" },
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
