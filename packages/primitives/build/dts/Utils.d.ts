import * as AST from "@effect/schema/AST";
/**
 * @category primitives
 * @since 0.1.0
 */
import { Schema as S } from "effect";
import * as A from "effect/Array";
import type { ReadonlyRecord } from "effect/Record";
import type * as Types from "effect/Types";
/**
 * @category primitives
 * @since 0.1.0
 */
export declare const EnumWithDefault: <TEnum extends S.EnumsDefinition>(enums: TEnum) => (defaultValue: () => Types.NoInfer<TEnum[keyof TEnum]>) => S.PropertySignature<":", TEnum[keyof TEnum], never, ":", TEnum[keyof TEnum], true, never>;
/**
 * @since 0.1.0
 * @category primitives
 */
export declare const ReadonlySetFromArray: <A, I, R>(itemSchema: S.Schema<A, I, R>) => S.Schema<ReadonlySet<A>, ReadonlyArray<I>, R>;
/**
 * @since 0.1.0
 * @category primitives
 */
export declare const StructFromReadonlyArray: <T extends A.NonEmptyReadonlyArray<AST.LiteralValue>, TSchema extends S.Schema<string>>(arr: T, valueSchema: TSchema) => S.Struct<any>;
/**
 * @since 0.1.0
 * @category primitives
 */
export declare const UnionOfLiteralsFromRecordValues: <TRecord extends ReadonlyRecord<string, string>>(record: TRecord) => S.Schema<string, string, never>;
/**
 * @since 0.1.0
 * @category primitives
 */
export declare const EnumFromReadonlyArray: <const T extends A.NonEmptyReadonlyArray<AST.LiteralValue>>(arr: T) => S.Enums<any>;
/**
 * @since 0.1.0
 * @category primitives
 */
export declare const ReadonlyArrayToUnionOfLiterals: <const T extends A.NonEmptyReadonlyArray<AST.LiteralValue>>(arr: T) => S.Schema<T[number], T[number], never>;
/**
 * @since 0.1.0
 * @category primitives
 */
export declare const UpperCasedLiteral: <const T extends string>(str: T) => S.Literal<[Uppercase<T>]>;
//# sourceMappingURL=Utils.d.ts.map