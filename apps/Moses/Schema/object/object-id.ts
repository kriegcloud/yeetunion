/**
 * @since 0.1.0
 */
import * as S from "effect/Schema";
import { ulid } from "ulidx";
/**
 * @since 0.1.0
 * @category models
 */
export const ObjectIdBrand: unique symbol = Symbol("@e2/moses/ObjectId");

/**
 * @since 0.1.0
 * @category models
 * TODO(ben): Make brand.
 * ```
 * export const ObjectIdSchema = S.ULID.pipe(S.brand(ObjectIdBrand))
 * ```
 */
export const ObjectIdSchema = S.ULID;
/**
 * @since 0.1.0
 * @category models
 */
export type ObjectId = typeof ObjectIdSchema.Type;
/**
 * @since 0.1.0
 * @category models
 */
export interface ObjectIdClass extends S.SchemaClass<ObjectId, string> {
  isValid(id: string): id is ObjectId;
  random(): ObjectId;
}
/**
 * @since 0.1.0
 * @category models
 */
export const ObjectId: ObjectIdClass = class extends ObjectIdSchema {
  static isValid(id: string): id is ObjectId {
    try {
      S.decodeSync(ObjectId)(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  static random(): ObjectId {
    return ulid() as ObjectId;
  }
};
/**
 * @since 0.1.0
 * @category models
 */
export const createObjectId = () => ObjectId.random();
