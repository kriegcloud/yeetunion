"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpperCasedLiteral = exports.UnionOfLiteralsFromRecordValues = exports.StructFromReadonlyArray = exports.ReadonlySetFromArray = exports.ReadonlyArrayToUnionOfLiterals = exports.EnumWithDefault = exports.EnumFromReadonlyArray = void 0;
var _effect = require("effect");
var _Function = require("effect/Function");
/**
 * @category primitives
 * @since 0.1.0
 */

/**
 * @category primitives
 * @since 0.1.0
 */
const EnumWithDefault = enums => (0, _Function.pipe)(defaultValue => _effect.Schema.Enums(enums).pipe(_effect.Schema.propertySignature, _effect.Schema.withConstructorDefault(defaultValue)));
/**
 * @since 0.1.0
 * @category primitives
 */
exports.EnumWithDefault = EnumWithDefault;
const ReadonlySetFromArray = itemSchema => _effect.Schema.transform(
// Source schema: array of items
_effect.Schema.Array(itemSchema),
// Target schema: readonly set of items
// **IMPORTANT** We use `Schema.typeSchema` here to obtain the schema
// of the items to avoid decoding the elements twice
_effect.Schema.ReadonlySetFromSelf(_effect.Schema.typeSchema(itemSchema)), {
  strict: true,
  decode: items => new Set(items),
  encode: set => Array.from(set.values())
});
/**
 * @since 0.1.0
 * @category primitives
 */
exports.ReadonlySetFromArray = ReadonlySetFromArray;
const StructFromReadonlyArray = (arr, valueSchema) => _effect.Schema.Struct(Object.fromEntries(arr.map(key => [key, valueSchema])));
/**
 * @since 0.1.0
 * @category primitives
 */
exports.StructFromReadonlyArray = StructFromReadonlyArray;
const UnionOfLiteralsFromRecordValues = record => _effect.Schema.Union(...Object.values(record).map(value => _effect.Schema.Literal(value)));
/**
 * @since 0.1.0
 * @category primitives
 */
exports.UnionOfLiteralsFromRecordValues = UnionOfLiteralsFromRecordValues;
const EnumFromReadonlyArray = arr => _effect.Schema.Enums(Object.fromEntries(arr.map(key => [key, key])));
/**
 * @since 0.1.0
 * @category primitives
 */
exports.EnumFromReadonlyArray = EnumFromReadonlyArray;
const ReadonlyArrayToUnionOfLiterals = arr => _effect.Schema.Union(...arr.map(value => _effect.Schema.Literal(value)));
/**
 * @since 0.1.0
 * @category primitives
 */
exports.ReadonlyArrayToUnionOfLiterals = ReadonlyArrayToUnionOfLiterals;
const UpperCasedLiteral = str => _effect.Schema.Literal(str.toUpperCase());
exports.UpperCasedLiteral = UpperCasedLiteral;
//# sourceMappingURL=Utils.js.map