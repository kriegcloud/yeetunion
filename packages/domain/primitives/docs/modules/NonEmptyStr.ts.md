---
title: NonEmptyStr.ts
nav_order: 10
parent: Modules
---

## NonEmptyStr overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [NonEmptyStr](#nonemptystr)
  - [NonEmptyStr (type alias)](#nonemptystr-type-alias)
  - [NonEmptyStrOptional](#nonemptystroptional)
  - [NonEmptyStrOptional (type alias)](#nonemptystroptional-type-alias)
  - [NonEmptyStrOrNull](#nonemptystrornull)
  - [NonEmptyStrOrNull (type alias)](#nonemptystrornull-type-alias)
  - [NonEmptyStrOrNullish](#nonemptystrornullish)
  - [NonEmptyStrOrNullish (type alias)](#nonemptystrornullish-type-alias)
  - [NonEmptyStrOrUndefined](#nonemptystrorundefined)
  - [NonEmptyStrOrUndefined (type alias)](#nonemptystrorundefined-type-alias)
  - [NonEmptyStrWithDefault](#nonemptystrwithdefault)
  - [NonEmptyTrimStr](#nonemptytrimstr)
  - [NonEmptyTrimStr (type alias)](#nonemptytrimstr-type-alias)
  - [NonEmptyTrimStrOptional](#nonemptytrimstroptional)
  - [NonEmptyTrimStrOptional (type alias)](#nonemptytrimstroptional-type-alias)
  - [NonEmptyTrimStrOrNull](#nonemptytrimstrornull)
  - [NonEmptyTrimStrOrNull (type alias)](#nonemptytrimstrornull-type-alias)
  - [NonEmptyTrimStrOrNullish](#nonemptytrimstrornullish)
  - [NonEmptyTrimStrOrNullish (type alias)](#nonemptytrimstrornullish-type-alias)
  - [NonEmptyTrimStrOrUndefined](#nonemptytrimstrorundefined)
  - [NonEmptyTrimStrOrUndefined (type alias)](#nonemptytrimstrorundefined-type-alias)
  - [NonEmptyTrimStrWithDefault](#nonemptytrimstrwithdefault)

---

# primitives

## NonEmptyStr

**Signature**

```ts
export declare const NonEmptyStr: typeof S.NonEmptyTrimmedString
```

Added in v0.1.0

## NonEmptyStr (type alias)

**Signature**

```ts
export type NonEmptyStr = typeof NonEmptyStr.Type
```

Added in v0.1.0

## NonEmptyStrOptional

**Signature**

```ts
export declare const NonEmptyStrOptional: S.optional<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyStrOptional (type alias)

**Signature**

```ts
export type NonEmptyStrOptional = S.Schema.Type<typeof NonEmptyStrOptional>
```

Added in v0.1.0

## NonEmptyStrOrNull

**Signature**

```ts
export declare const NonEmptyStrOrNull: S.NullOr<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyStrOrNull (type alias)

**Signature**

```ts
export type NonEmptyStrOrNull = typeof NonEmptyStrOrNull.Type
```

Added in v0.1.0

## NonEmptyStrOrNullish

**Signature**

```ts
export declare const NonEmptyStrOrNullish: S.NullishOr<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyStrOrNullish (type alias)

**Signature**

```ts
export type NonEmptyStrOrNullish = typeof NonEmptyStrOrNullish.Type
```

Added in v0.1.0

## NonEmptyStrOrUndefined

**Signature**

```ts
export declare const NonEmptyStrOrUndefined: S.UndefinedOr<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyStrOrUndefined (type alias)

**Signature**

```ts
export type NonEmptyStrOrUndefined = typeof NonEmptyStrOrUndefined.Type
```

Added in v0.1.0

## NonEmptyStrWithDefault

**Signature**

```ts
export declare const NonEmptyStrWithDefault: (
  value: string
) => S.PropertySignature<":", string, never, ":", string, true, never>
```

Added in v0.1.0

## NonEmptyTrimStr

**Signature**

```ts
export declare const NonEmptyTrimStr: typeof S.NonEmptyTrimmedString
```

Added in v0.1.0

## NonEmptyTrimStr (type alias)

**Signature**

```ts
export type NonEmptyTrimStr = typeof NonEmptyTrimStr.Type
```

Added in v0.1.0

## NonEmptyTrimStrOptional

**Signature**

```ts
export declare const NonEmptyTrimStrOptional: S.optional<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyTrimStrOptional (type alias)

**Signature**

```ts
export type NonEmptyTrimStrOptional = S.Schema.Type<typeof NonEmptyTrimStrOptional>
```

Added in v0.1.0

## NonEmptyTrimStrOrNull

**Signature**

```ts
export declare const NonEmptyTrimStrOrNull: S.NullOr<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyTrimStrOrNull (type alias)

**Signature**

```ts
export type NonEmptyTrimStrOrNull = typeof NonEmptyTrimStrOrNull.Type
```

Added in v0.1.0

## NonEmptyTrimStrOrNullish

**Signature**

```ts
export declare const NonEmptyTrimStrOrNullish: S.NullishOr<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyTrimStrOrNullish (type alias)

**Signature**

```ts
export type NonEmptyTrimStrOrNullish = typeof NonEmptyTrimStrOrNullish.Type
```

Added in v0.1.0

## NonEmptyTrimStrOrUndefined

**Signature**

```ts
export declare const NonEmptyTrimStrOrUndefined: S.UndefinedOr<typeof S.NonEmptyTrimmedString>
```

Added in v0.1.0

## NonEmptyTrimStrOrUndefined (type alias)

**Signature**

```ts
export type NonEmptyTrimStrOrUndefined = typeof NonEmptyTrimStrOrUndefined.Type
```

Added in v0.1.0

## NonEmptyTrimStrWithDefault

**Signature**

```ts
export declare const NonEmptyTrimStrWithDefault: (
  value: string
) => S.PropertySignature<":", string, never, ":", string, true, never>
```

Added in v0.1.0
