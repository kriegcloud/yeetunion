"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpperCasedLiteral = exports.UnionOfLiteralsFromRecordValues = exports.StructFromReadonlyArray = exports.ReadonlySetFromArray = exports.ReadonlyArrayToUnionOfLiterals = exports.EnumWithDefault = exports.EnumFromReadonlyArray = void 0;
var AST = _interopRequireWildcard(require("effect/SchemaAST"));
var _effect = require("effect");
var A = _interopRequireWildcard(require("effect/Array"));
var _Function = require("effect/Function");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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