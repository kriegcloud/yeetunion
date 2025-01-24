---
title: Str.ts
nav_order: 13
parent: Modules
---

## Str overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [Str](#str)
  - [Str (type alias)](#str-type-alias)
  - [StrOptional](#stroptional)
  - [StrOptional (type alias)](#stroptional-type-alias)
  - [StrOrNull](#strornull)
  - [StrOrNull (type alias)](#strornull-type-alias)
  - [StrOrNullish](#strornullish)
  - [StrOrNullish (type alias)](#strornullish-type-alias)
  - [StrOrUndefined](#strorundefined)
  - [StrOrUndefined (type alias)](#strorundefined-type-alias)
  - [StrWithDefault](#strwithdefault)

---

# primitives

## Str

**Signature**

```ts
export declare const Str: typeof S.String
```

Added in v0.1.0

## Str (type alias)

**Signature**

```ts
export type Str = typeof Str.Type
```

Added in v0.1.0

## StrOptional

**Signature**

```ts
export declare const StrOptional: S.optional<typeof S.String>
```

Added in v0.1.0

## StrOptional (type alias)

**Signature**

```ts
export type StrOptional = S.Schema.Type<typeof StrOptional>
```

Added in v0.1.0

## StrOrNull

**Signature**

```ts
export declare const StrOrNull: S.NullOr<typeof S.String>
```

Added in v0.1.0

## StrOrNull (type alias)

**Signature**

```ts
export type StrOrNull = typeof StrOrNull.Type
```

Added in v0.1.0

## StrOrNullish

**Signature**

```ts
export declare const StrOrNullish: S.NullishOr<typeof S.String>
```

Added in v0.1.0

## StrOrNullish (type alias)

**Signature**

```ts
export type StrOrNullish = typeof StrOrNullish.Type
```

Added in v0.1.0

## StrOrUndefined

**Signature**

```ts
export declare const StrOrUndefined: S.UndefinedOr<typeof S.String>
```

Added in v0.1.0

## StrOrUndefined (type alias)

**Signature**

```ts
export type StrOrUndefined = typeof StrOrUndefined.Type
```

Added in v0.1.0

## StrWithDefault

**Signature**

```ts
export declare const StrWithDefault: (
  value: string
) => S.PropertySignature<":", string, never, ":", string, true, never>
```

Added in v0.1.0
