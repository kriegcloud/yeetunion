---
title: Utils.ts
nav_order: 15
parent: Modules
---

## Utils overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [EnumFromReadonlyArray](#enumfromreadonlyarray)
  - [EnumWithDefault](#enumwithdefault)
  - [ReadonlyArrayToUnionOfLiterals](#readonlyarraytounionofliterals)
  - [ReadonlySetFromArray](#readonlysetfromarray)
  - [StructFromReadonlyArray](#structfromreadonlyarray)
  - [UnionOfLiteralsFromRecordValues](#unionofliteralsfromrecordvalues)
  - [UpperCasedLiteral](#uppercasedliteral)

---

# primitives

## EnumFromReadonlyArray

**Signature**

```ts
export declare const EnumFromReadonlyArray: <const T extends A.NonEmptyReadonlyArray<AST.LiteralValue>>(
  arr: T
) => S.Enums<any>
```

Added in v0.1.0

## EnumWithDefault

**Signature**

```ts
export declare const EnumWithDefault: <TEnum extends S.EnumsDefinition>(
  enums: TEnum
) => (
  defaultValue: () => Types.NoInfer<TEnum[keyof TEnum]>
) => S.PropertySignature<":", TEnum[keyof TEnum], never, ":", TEnum[keyof TEnum], true, never>
```

Added in v0.1.0

## ReadonlyArrayToUnionOfLiterals

**Signature**

```ts
export declare const ReadonlyArrayToUnionOfLiterals: <const T extends A.NonEmptyReadonlyArray<AST.LiteralValue>>(
  arr: T
) => S.Schema<T[number], T[number], never>
```

Added in v0.1.0

## ReadonlySetFromArray

**Signature**

```ts
export declare const ReadonlySetFromArray: <A, I, R>(
  itemSchema: S.Schema<A, I, R>
) => S.Schema<ReadonlySet<A>, ReadonlyArray<I>, R>
```

Added in v0.1.0

## StructFromReadonlyArray

**Signature**

```ts
export declare const StructFromReadonlyArray: <
  T extends A.NonEmptyReadonlyArray<AST.LiteralValue>,
  TSchema extends S.Schema<string>
>(
  arr: T,
  valueSchema: TSchema
) => S.Struct<any>
```

Added in v0.1.0

## UnionOfLiteralsFromRecordValues

**Signature**

```ts
export declare const UnionOfLiteralsFromRecordValues: <TRecord extends ReadonlyRecord<string, string>>(
  record: TRecord
) => S.Schema<string, string, never>
```

Added in v0.1.0

## UpperCasedLiteral

**Signature**

```ts
export declare const UpperCasedLiteral: <const T extends string>(str: T) => S.Literal<[Uppercase<T>]>
```

Added in v0.1.0
