import { Header } from "../components/layouts/Header";
import { Page } from "../components/layouts/Page";
import { ListItem } from "../components/layouts/List";

const texts = {
  title: "Kontakt",
};
const email = "madis.palm@gmail.com";
const phone = "+3725293128";

export default function Kontakt() {
  return (
    <Page width="900px">
      <Header>{texts.title}</Header>
      <ListItem value={phone} />
      <ListItem
        value={
          <a href={`mailto:${email}?subject=Fotograaf Madis Palm&body=Tere.`}>
            {email}
          </a>
        }
      />
    </Page>
  );
}
