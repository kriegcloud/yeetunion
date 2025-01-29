/**
 * @category primitives
 * @since 0.1.0
 */
import * as Bool from "./Bool";

/**
 * @since 0.1.0
 * @category primitives
 */
import * as Brand from "./Brand";

/**
 * This module provides a type-safe, immutable builder pattern implementation
 * using Effect.
 *
 * @since 0.1.0
 */
import * as Builder from "./Builder";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Email from "./Email";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Hex from "./Hex";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as IP from "./IP";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Int from "./Int";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as NonEmptyStr from "./NonEmptyStr";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Num from "./Num";

/**
 * @since 0.1.0
 * @category primitives
 */
import * as Path from "./Path";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Str from "./Str";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Url from "./Url";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Utils from "./Utils";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Uuid from "./Uuid";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as DateTime from "./DateTime";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as Phone from "./Phone";

/**
 * @category primitives
 * @since 0.1.0
 */
import * as File from "./File";

export default {
  ...Builder,
  ...Bool,
  ...Brand,
  ...DateTime,
  ...Email,
  ...Hex,
  ...IP,
  ...Int,
  ...NonEmptyStr,
  ...Num,
  ...Path,
  ...Str,
  ...Url,
  ...Utils,
  ...Uuid,
  ...Phone,
  ...File,
};
