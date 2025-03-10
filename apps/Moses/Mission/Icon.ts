import {
  faArrowDownToBracket,
  faArrowDownToSquare,
  faArrowLeft,
  faArrowRight,
  faCamera,
  faCancel,
  faCheck,
  faChevronRight,
  faImageLandscape,
  faKeyboard,
  faLock,
  faPencil,
  faPlus,
  faScannerTouchscreen,
  faSearch,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import * as R from "effect/Record";
import * as S from "effect/Schema";

export namespace Icon {
  export const TYPES = {
    faArrowDownToBracket,
    faArrowDownToSquare,
    faArrowLeft,
    faArrowRight,
    faCamera,
    faCancel,
    faCheck,
    faChevronRight,
    faImageLandscape,
    faKeyboard,
    faLock,
    faPencil,
    faPlus,
    faScannerTouchscreen,
    faSearch,
    faTrash,
  } as const;

  export const Schema = S.Literal(...R.keys(TYPES));
  export type Icon = typeof Schema.Type;
}
