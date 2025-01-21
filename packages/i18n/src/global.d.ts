import en from "./langs/en.json";
import fr from "./langs/fr.json";

type Messages = typeof en | typeof fr;

declare global {
  interface IntlMessages extends Messages {}
}
