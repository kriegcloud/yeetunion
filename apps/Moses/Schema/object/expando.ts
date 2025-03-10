import * as S from "effect/Schema";
import * as MTypes from "../../Types";
import { MosesObject } from "../AST";

export const EXPANDO_TYPENAME = "e2.solutions/type/Expando";

/**
 * Marker value to be passed to `object` constructor to create a MOSES object with a generated ID.
 */
export const ExpandoMarker = Symbol.for("@e2/moses/schema/Expando");

const ExpandoSchema = S.Struct({}, { key: S.String, value: S.Any }).pipe(
  MosesObject(EXPANDO_TYPENAME, "0.1.0"),
);

export interface Expando extends S.Schema.Type<typeof ExpandoSchema> {}

export const Expando: S.Schema<Expando> & { [ExpandoMarker]: true } =
  ExpandoSchema as MTypes.AnyType;
