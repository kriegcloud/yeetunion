import * as MTypes from "../../Types";

import { PropertyMeta } from "./annotations";

/**
 * @since 0.1.0
 * @category Schema
 * Marker interface for an object with an `id`.
 */
export interface HasId {
  readonly id: string;
}

/**
 * @since 0.1.0
 * @category Schema
 * @internal
 */
export const FIELD_PATH_ANNOTATION = "path";

/**
 * @since 0.1.0
 * @category Schema
 * Sets the path for the field.
 * @param path Data source path in the JSON path format. This is the field path in the source object.
 */
export const FieldPath = (path: string) =>
  PropertyMeta(FIELD_PATH_ANNOTATION, path);

/**
 * @since 0.1.0
 * @category Schema
 * @internal
 * Internal Effect-schema implementation detail.
 */
export const schemaVariance = {
  _A: (_: MTypes.AnyType) => _,
  _I: (_: MTypes.AnyType) => _,
  _R: (_: never) => _,
};
