---
title: Num.ts
nav_order: 11
parent: Modules
---

## Num overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [NegNum](#negnum)
  - [NegNum (type alias)](#negnum-type-alias)
  - [NegNumOptional](#negnumoptional)
  - [NegNumOptional (type alias)](#negnumoptional-type-alias)
  - [NegNumOrNull](#negnumornull)
  - [NegNumOrNull (type alias)](#negnumornull-type-alias)
  - [NegNumOrNullish](#negnumornullish)
  - [NegNumOrNullish (type alias)](#negnumornullish-type-alias)
  - [NegNumOrUndefined](#negnumorundefined)
  - [NegNumOrUndefined (type alias)](#negnumorundefined-type-alias)
  - [NegNumWithDefault](#negnumwithdefault)
  - [Num](#num)
  - [Num (type alias)](#num-type-alias)
  - [NumOptional](#numoptional)
  - [NumOptional (type alias)](#numoptional-type-alias)
  - [NumOrNull](#numornull)
  - [NumOrNull (type alias)](#numornull-type-alias)
  - [NumOrNullish](#numornullish)
  - [NumOrNullish (type alias)](#numornullish-type-alias)
  - [NumOrUndefined](#numorundefined)
  - [NumOrUndefined (type alias)](#numorundefined-type-alias)
  - [NumWithDefault](#numwithdefault)
  - [PosNum](#posnum)
  - [PosNum (type alias)](#posnum-type-alias)
  - [PosNumOptional](#posnumoptional)
  - [PosNumOptional (type alias)](#posnumoptional-type-alias)
  - [PosNumOrNull](#posnumornull)
  - [PosNumOrNull (type alias)](#posnumornull-type-alias)
  - [PosNumOrNullish](#posnumornullish)
  - [PosNumOrNullish (type alias)](#posnumornullish-type-alias)
  - [PosNumOrUndefined](#posnumorundefined)
  - [PosNumOrUndefined (type alias)](#posnumorundefined-type-alias)
  - [PosNumWithDefault](#posnumwithdefault)

---

# primitives

## NegNum

**Signature**

```ts
export declare const NegNum: S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
```

Added in v0.1.0

## NegNum (type alias)

**Signature**

```ts
export type NegNum = typeof NegNum.Type
```

Added in v0.1.0

## NegNumOptional

**Signature**

```ts
export declare const NegNumOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
>
```

Added in v0.1.0

## NegNumOptional (type alias)

**Signature**

```ts
export type NegNumOptional = S.Schema.Type<typeof NegNumOptional>
```

Added in v0.1.0

## NegNumOrNull

**Signature**

```ts
export declare const NegNumOrNull: S.NullOr<S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">>
```

Added in v0.1.0

## NegNumOrNull (type alias)

**Signature**

```ts
export type NegNumOrNull = typeof NegNumOrNull.Type
```

Added in v0.1.0

## NegNumOrNullish

**Signature**

```ts
export declare const NegNumOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
>
```

Added in v0.1.0

## NegNumOrNullish (type alias)

**Signature**

```ts
export type NegNumOrNullish = typeof NegNumOrNullish.Type
```

Added in v0.1.0

## NegNumOrUndefined

**Signature**

```ts
export declare const NegNumOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/NegNum">
>
```

Added in v0.1.0

## NegNumOrUndefined (type alias)

**Signature**

```ts
export type NegNumOrUndefined = typeof NegNumOrUndefined.Type
```

Added in v0.1.0

## NegNumWithDefault

**Signature**

```ts
export declare const NegNumWithDefault: (
  value: number
) => S.PropertySignature<":", number & Brand<"@/primitives/NegNum">, never, ":", number, true, never>
```

Added in v0.1.0

## Num

**Signature**

```ts
export declare const Num: typeof S.Number
```

Added in v0.1.0

## Num (type alias)

**Signature**

```ts
export type Num = typeof Num.Type
```

Added in v0.1.0

## NumOptional

**Signature**

```ts
export declare const NumOptional: S.optional<typeof S.Number>
```

Added in v0.1.0

## NumOptional (type alias)

**Signature**

```ts
export type NumOptional = S.Schema.Type<typeof NumOptional>
```

Added in v0.1.0

## NumOrNull

**Signature**

```ts
export declare const NumOrNull: S.NullOr<typeof S.Number>
```

Added in v0.1.0

## NumOrNull (type alias)

**Signature**

```ts
export type NumOrNull = typeof NumOrNull.Type
```

Added in v0.1.0

## NumOrNullish

**Signature**

```ts
export declare const NumOrNullish: S.NullishOr<typeof S.Number>
```

Added in v0.1.0

## NumOrNullish (type alias)

**Signature**

```ts
export type NumOrNullish = typeof NumOrNullish.Type
```

Added in v0.1.0

## NumOrUndefined

**Signature**

```ts
export declare const NumOrUndefined: S.UndefinedOr<typeof S.Number>
```

Added in v0.1.0

## NumOrUndefined (type alias)

**Signature**

```ts
export type NumOrUndefined = typeof NumOrUndefined.Type
```

Added in v0.1.0

## NumWithDefault

**Signature**

```ts
export declare const NumWithDefault: (
  value: number
) => S.PropertySignature<":", number, never, ":", number, true, never>
```

Added in v0.1.0

## PosNum

**Signature**

```ts
export declare const PosNum: S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
```

Added in v0.1.0

## PosNum (type alias)

**Signature**

```ts
export type PosNum = typeof PosNum.Type
```

Added in v0.1.0

## PosNumOptional

**Signature**

```ts
export declare const PosNumOptional: S.optional<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
>
```

Added in v0.1.0

## PosNumOptional (type alias)

**Signature**

```ts
export type PosNumOptional = S.Schema.Type<typeof PosNumOptional>
```

Added in v0.1.0

## PosNumOrNull

**Signature**

```ts
export declare const PosNumOrNull: S.NullOr<S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">>
```

Added in v0.1.0

## PosNumOrNull (type alias)

**Signature**

```ts
export type PosNumOrNull = typeof PosNumOrNull.Type
```

Added in v0.1.0

## PosNumOrNullish

**Signature**

```ts
export declare const PosNumOrNullish: S.NullishOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
>
```

Added in v0.1.0

## PosNumOrNullish (type alias)

**Signature**

```ts
export type PosNumOrNullish = typeof PosNumOrNullish.Type
```

Added in v0.1.0

## PosNumOrUndefined

**Signature**

```ts
export declare const PosNumOrUndefined: S.UndefinedOr<
  S.brand<S.filter<S.Schema<number, number, never>>, "@/primitives/PosNum">
>
```

Added in v0.1.0

## PosNumOrUndefined (type alias)

**Signature**

```ts
export type PosNumOrUndefined = typeof PosNumOrUndefined.Type
```

Added in v0.1.0

## PosNumWithDefault

**Signature**

```ts
export declare const PosNumWithDefault: (
  value: number
) => S.PropertySignature<":", number & Brand<"@/primitives/PosNum">, never, ":", number, true, never>
```

Added in v0.1.0
