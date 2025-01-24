---
title: Email.ts
nav_order: 5
parent: Modules
---

## Email overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [Email (type alias)](#email-type-alias)
  - [EmailOptional](#emailoptional)
  - [EmailOptional (type alias)](#emailoptional-type-alias)
  - [EmailOrNull](#emailornull)
  - [EmailOrNull (type alias)](#emailornull-type-alias)
  - [EmailOrNullish](#emailornullish)
  - [EmailOrNullish (type alias)](#emailornullish-type-alias)
  - [EmailOrUndefined](#emailorundefined)
  - [EmailOrUndefined (type alias)](#emailorundefined-type-alias)
  - [EmailWithDefault](#emailwithdefault)

---

# primitives

## Email (type alias)

**Signature**

```ts
export type Email = typeof Email.Type
```

Added in v0.1.0

## EmailOptional

**Signature**

```ts
export declare const EmailOptional: S.optional<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## EmailOptional (type alias)

**Signature**

```ts
export type EmailOptional = S.Schema.Type<typeof EmailOptional>
```

Added in v0.1.0

## EmailOrNull

**Signature**

```ts
export declare const EmailOrNull: S.NullOr<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## EmailOrNull (type alias)

**Signature**

```ts
export type EmailOrNull = typeof EmailOrNull.Type
```

Added in v0.1.0

## EmailOrNullish

**Signature**

```ts
export declare const EmailOrNullish: S.NullishOr<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## EmailOrNullish (type alias)

**Signature**

```ts
export type EmailOrNullish = typeof EmailOrNullish.Type
```

Added in v0.1.0

## EmailOrUndefined

**Signature**

```ts
export declare const EmailOrUndefined: S.UndefinedOr<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## EmailOrUndefined (type alias)

**Signature**

```ts
export type EmailOrUndefined = typeof EmailOrUndefined.Type
```

Added in v0.1.0

## EmailWithDefault

**Signature**

```ts
export declare const EmailWithDefault: (
  value: string
) => S.PropertySignature<":", string, never, ":", string, true, never>
```

Added in v0.1.0
