---
title: Url.ts
nav_order: 14
parent: Modules
---

## Url overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [URL](#url)
  - [URL (type alias)](#url-type-alias)
  - [URLOptional](#urloptional)
  - [URLOptional (type alias)](#urloptional-type-alias)
  - [URLOrNull](#urlornull)
  - [URLOrNull (type alias)](#urlornull-type-alias)
  - [URLOrNullish](#urlornullish)
  - [URLOrNullish (type alias)](#urlornullish-type-alias)
  - [URLOrUndefined](#urlorundefined)
  - [URLOrUndefined (type alias)](#urlorundefined-type-alias)
  - [URLWithDefault](#urlwithdefault)

---

# primitives

## URL

**Signature**

```ts
export declare const URL: S.filter<S.Schema<string, string, never>>
```

Added in v0.1.0

## URL (type alias)

**Signature**

```ts
export type URL = typeof URL.Type
```

Added in v0.1.0

## URLOptional

**Signature**

```ts
export declare const URLOptional: S.optional<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## URLOptional (type alias)

**Signature**

```ts
export type URLOptional = S.Schema.Type<typeof URLOptional>
```

Added in v0.1.0

## URLOrNull

**Signature**

```ts
export declare const URLOrNull: S.NullOr<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## URLOrNull (type alias)

**Signature**

```ts
export type URLOrNull = typeof URLOrNull.Type
```

Added in v0.1.0

## URLOrNullish

**Signature**

```ts
export declare const URLOrNullish: S.NullishOr<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## URLOrNullish (type alias)

**Signature**

```ts
export type URLOrNullish = typeof URLOrNullish.Type
```

Added in v0.1.0

## URLOrUndefined

**Signature**

```ts
export declare const URLOrUndefined: S.UndefinedOr<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## URLOrUndefined (type alias)

**Signature**

```ts
export type URLOrUndefined = typeof URLOrUndefined.Type
```

Added in v0.1.0

## URLWithDefault

**Signature**

```ts
export declare const URLWithDefault: (
  value: string
) => S.PropertySignature<":", string, never, ":", string, true, never>
```

Added in v0.1.0
