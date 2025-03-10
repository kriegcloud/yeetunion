/**
 * ======================================================================================
 * Enums
 * ======================================================================================
 */
/**
 * Operations for predicates.
 * @since 0.1.0
 * @category enums
 */
export enum PredicateOperation {
  OR = 0,
  AND = 1,
  NOT = 2, // === NOT AND (NAND)
  IN = 10,
  EQUALS = 11,
  GTE = 12,
  GT = 13,
  LTE = 14,
  LT = 15,
  PREFIX_MATCH = 20,
  TEXT_MATCH = 21,
}
/**
 * Operations for predicates.
 * @since 0.1.0
 * @category enums
 */
export enum ObjectMutationOperation {
  SET = 0, // Default.
  DELETE = 1,
  ARRAY_PUSH = 2,
  SET_ADD = 4,
  SET_DELETE = 5,
  YJS = 6,
}

/**
 * ======================================================================================
 * Message Interfaces
 * ======================================================================================
 */

/**
 * @category Models
 * @since 0.1.0
 * A generic value that can be one of several types (one of in proto).
 * Note: In strict Protobuf one of semantics, only one field is set.
 * Below, we simply mark all as optional.
 */
export interface Value {
  null?: boolean; // (field 1)  Explicit null vs undefined.
  bool?: boolean; // (field 2)
  int?: number; // (field 3)
  float?: number; // (field 4)
  string?: string; // (field 5)

  timestamp?: string; // (field 10) e.g., Unix time as string
  datetime?: string; // (field 11) e.g., ISO 8601
  bytes?: Uint8Array; // (field 12) raw bytes

  object?: KeyValueObject; // (field 20)
  array?: ArrayValue; // (field 21)

  reference?: Reference; // (field 30)
}

/**
 *
 * @category Models
 * @since 0.1.0
 * Ordered a collection of values.
 */
export interface ArrayValue {
  values: Value[]; // repeated Value
}

/**
 * @category Models
 * @since 0.1.0
 * A key-value pair: (string key) -> (Value).
 */
export interface KeyValue {
  key: string; // (field 1)
  value?: Value; // (field 2)
}

/**
 * @category Models
 * @since 0.1.0
 * Object data definition (a collection of properties).
 */
export interface KeyValueObject {
  properties: KeyValue[]; // repeated KeyValue
}

/**
 * @category Models
 * @since 0.1.0
 * Reference to an Item (e.g., object).
 */
export interface Reference {
  objectId: string; // (field 1)
  protocol?: string; // (field 2)
  host?: string; // (field 3)
}

/**
 * @category Models
 * @since 0.1.0
 * A predicate used for queries (can be nested).
 */
export interface Predicate {
  op: PredicateOperation; // (field 1)

  key?: string; // (field 2)
  value?: Value; // (field 3)

  // Nested predicates for compositions like OR, AND, etc.
  predicates?: Predicate[]; // repeated Predicate (field 4)
}

/**
 * @category Models
 * @since 0.1.0
 * A query has a single root predicate.
 */
export interface Query {
  root?: Predicate; // (field 1)
}

/**
 * @category Models
 * @since 0.1.0
 * Object snapshot with type, optional meta, and the data root.
 */
export interface ObjectSnapshot {
  type?: string; // (field 1) e.g., name of the schema
  type_ref?: Reference; // (field 4)

  root?: Value; // (field 2) the actual data
  meta?: Value; // (field 3) metadata
}

/**
 * @category Models
 * @since 0.1.0
 * A single mutation to apply to an object.
 */
export interface ObjectMutation {
  operation: ObjectMutationOperation; // (field 1)
  key: string; // (field 2)

  value?: Value; // (field 3) used for SET, etc.
  mutation?: YJS; // (field 4)    used for the YJS operation
}

/**
 * @category Models
 * @since 0.1.0
 * Payload for a YJS mutation.
 */
export interface YJS {
  id: Uint8Array; // (field 1)
  payload: Uint8Array; // (field 2)
}

/**
 * @category Models
 * @since 0.1.0
 * A set of mutations, possibly including "meta_mutations".
 */
export interface ObjectMutationSet {
  type?: string; // (field 1)
  type_ref?: Reference; // (field 4)

  mutations?: ObjectMutation[]; // repeated ObjectMutation (field 2)
  meta_mutations?: ObjectMutation[]; // repeated ObjectMutation (field 3)
}
