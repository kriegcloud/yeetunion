---
title: Int.ts
nav_order: 8
parent: Modules
---

## Int overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [Int](#int)
  - [Int (type alias)](#int-type-alias)
  - [IntOptional](#intoptional)
  - [IntOptional (type alias)](#intoptional-type-alias)
  - [IntOrNull](#intornull)
  - [IntOrNull (type alias)](#intornull-type-alias)
  - [IntOrNullish](#intornullish)
  - [IntOrNullish (type alias)](#intornullish-type-alias)
  - [IntOrUndefined](#intorundefined)
  - [IntOrUndefined (type alias)](#intorundefined-type-alias)
  - [IntWithDefault](#intwithdefault)
  - [NegInt](#negint)
  - [NegInt (type alias)](#negint-type-alias)
  - [NegIntOptional](#negintoptional)
  - [NegIntOptional (type alias)](#negintoptional-type-alias)
  - [NegIntOrNull](#negintornull)
  - [NegIntOrNull (type alias)](#negintornull-type-alias)
  - [NegIntOrNullish](#negintornullish)
  - [NegIntOrNullish (type alias)](#negintornullish-type-alias)
  - [NegIntOrUndefined](#negintorundefined)
  - [NegIntOrUndefined (type alias)](#negintorundefined-type-alias)
  - [NegIntWithDefault](#negintwithdefault)
  - [PosInt](#posint)
  - [PosInt (type alias)](#posint-type-alias)
  - [PosIntOptional](#posintoptional)
  - [PosIntOptional (type alias)](#posintoptional-type-alias)
  - [PosIntOrNull](#posintornull)
  - [PosIntOrNull (type alias)](#posintornull-type-alias)
  - [PosIntOrNullish](#posintornullish)
  - [PosIntOrNullish (type alias)](#posintornullish-type-alias)
  - [PosIntOrUndefined](#posintorundefined)
  - [PosIntOrUndefined (type alias)](#posintorundefined-type-alias)
  - [PosIntWithDefault](#posintwithdefault)

---

# primitives

## Int

**Signature**

```ts
export declare const Int: typeof S.Int
```

Added in v0.1.0

## Int (type alias)

**Signature**

```ts
export type Int = typeof Int.Type
```

Added in v0.1.0

## IntOptional

**Signature**

```ts
export declare const IntOptional: S.optional<typeof S.Int>
```

Added in v0.1.0

## IntOptional (type alias)

**Signature**

```ts
export type IntOptional = S.Schema.Type<typeof IntOptional>
```

Added in v0.1.0

## IntOrNull

**Signature**

```ts
export declare const IntOrNull: S.NullOr<typeof S.Int>
```

Added in v0.1.0

## IntOrNull (type alias)

**Signature**

```ts
export type IntOrNull = typeof IntOrNull.Type
```

Added in v0.1.0

## IntOrNullish

**Signature**

```ts
export declare const IntOrNullish: S.NullishOr<typeof S.Int>
```

Added in v0.1.0

## IntOrNullish (type alias)

**Signature**

```ts
export type IntOrNullish = typeof IntOrNullish.Type
```

Added in v0.1.0

## IntOrUndefined

**Signature**

```ts
export declare const IntOrUndefined: S.UndefinedOr<typeof S.Int>
```

Added in v0.1.0

## IntOrUndefined (type alias)

**Signature**

```ts
export type IntOrUndefined = typeof IntOrUndefined.Type
```

Added in v0.1.0

## IntWithDefault

**Signature**

```ts
export declare const IntWithDefault: (
  value: number
) => S.PropertySignature<":", number, never, ":", number, true, never>
```

Added in v0.1.0

## NegInt

**Signature**

```ts
export declare const NegInt: S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
```

Added in v0.1.0

## NegInt (type alias)

**Signature**

```ts
export type NegInt = typeof NegInt.Type
```

Added in v0.1.0

## NegIntOptional

**Signature**

```ts
export declare const NegIntOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
>
```

Added in v0.1.0

## NegIntOptional (type alias)

**Signature**

```ts
export type NegIntOptional = S.Schema.Type<typeof NegIntOptional>
```

Added in v0.1.0

## NegIntOrNull

**Signature**

```ts
export declare const NegIntOrNull: S.NullOr<S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">>
```

Added in v0.1.0

## NegIntOrNull (type alias)

**Signature**

```ts
export type NegIntOrNull = typeof NegIntOrNull.Type
```

Added in v0.1.0

## NegIntOrNullish

**Signature**

```ts
export declare const NegIntOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
>
```

Added in v0.1.0

## NegIntOrNullish (type alias)

**Signature**

```ts
export type NegIntOrNullish = typeof NegIntOrNullish.Type
```

Added in v0.1.0

## NegIntOrUndefined

**Signature**

```ts
export declare const NegIntOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegInt">
>
```

Added in v0.1.0

## NegIntOrUndefined (type alias)

**Signature**

```ts
export type NegIntOrUndefined = typeof NegIntOrUndefined.Type
```

Added in v0.1.0

## NegIntWithDefault

**Signature**

```ts
export declare const NegIntWithDefault: (
  value: number
) => S.PropertySignature<":", number & Brand<"@/primitives/NegInt">, never, ":", number, true, never>
```

Added in v0.1.0

## PosInt

**Signature**

```ts
export declare const PosInt: S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
```

Added in v0.1.0

## PosInt (type alias)

**Signature**

```ts
export type PosInt = typeof PosInt.Type
```

Added in v0.1.0

## PosIntOptional

**Signature**

```ts
export declare const PosIntOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
>
```

Added in v0.1.0

## PosIntOptional (type alias)

**Signature**

```ts
export type PosIntOptional = S.Schema.Type<typeof PosIntOptional>
```

Added in v0.1.0

## PosIntOrNull

**Signature**

```ts
export declare const PosIntOrNull: S.NullOr<S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">>
```

Added in v0.1.0

## PosIntOrNull (type alias)

**Signature**

```ts
export type PosIntOrNull = typeof PosIntOrNull.Type
```

Added in v0.1.0

## PosIntOrNullish

**Signature**

```ts
export declare const PosIntOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
>
```

Added in v0.1.0

## PosIntOrNullish (type alias)

**Signature**

```ts
export type PosIntOrNullish = typeof PosIntOrNullish.Type
```

Added in v0.1.0

## PosIntOrUndefined

**Signature**

```ts
export declare const PosIntOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosInt">
>
```

Added in v0.1.0

## PosIntOrUndefined (type alias)

**Signature**

```ts
export type PosIntOrUndefined = typeof PosIntOrUndefined.Type
```

Added in v0.1.0

## PosIntWithDefault

**Signature**

```ts
export declare const PosIntWithDefault: (
  value: number
) => S.PropertySignature<":", number & Brand<"@/primitives/PosInt">, never, ":", number, true, never>
```

Added in v0.1.0
