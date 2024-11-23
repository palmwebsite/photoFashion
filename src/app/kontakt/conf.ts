import { IListItem } from "../components/layouts/List";
import trans from "./texts.et.json";

export const CONTACTS: IListItem[] = [
  { label: trans.email, value: "example@email.com" },
  { label: trans.phone, value: "1234567890" },
];
