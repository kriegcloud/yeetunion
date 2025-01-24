---
title: Uuid.ts
nav_order: 16
parent: Modules
---

## Uuid overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [UUID](#uuid)
  - [UUID (type alias)](#uuid-type-alias)
  - [UUIDOptional](#uuidoptional)
  - [UUIDOptional (type alias)](#uuidoptional-type-alias)
  - [UUIDOrNull](#uuidornull)
  - [UUIDOrNull (type alias)](#uuidornull-type-alias)
  - [UUIDOrNullish](#uuidornullish)
  - [UUIDOrNullish (type alias)](#uuidornullish-type-alias)
  - [UUIDOrUndefined](#uuidorundefined)
  - [UUIDOrUndefined (type alias)](#uuidorundefined-type-alias)
  - [UUIDWithDefault](#uuidwithdefault)

---

# primitives

## UUID

**Signature**

```ts
export declare const UUID: typeof S.UUID
```

Added in v0.1.0

## UUID (type alias)

**Signature**

```ts
export type UUID = typeof UUID.Type
```

Added in v0.1.0

## UUIDOptional

**Signature**

```ts
export declare const UUIDOptional: S.optional<typeof S.UUID>
```

Added in v0.1.0

## UUIDOptional (type alias)

**Signature**

```ts
export type UUIDOptional = S.Schema.Type<typeof UUIDOptional>
```

Added in v0.1.0

## UUIDOrNull

**Signature**

```ts
export declare const UUIDOrNull: S.NullOr<typeof S.UUID>
```

Added in v0.1.0

## UUIDOrNull (type alias)

**Signature**

```ts
export type UUIDOrNull = typeof UUIDOrNull.Type
```

Added in v0.1.0

## UUIDOrNullish

**Signature**

```ts
export declare const UUIDOrNullish: S.NullishOr<typeof S.UUID>
```

Added in v0.1.0

## UUIDOrNullish (type alias)

**Signature**

```ts
export type UUIDOrNullish = typeof UUIDOrNullish.Type
```

Added in v0.1.0

## UUIDOrUndefined

**Signature**

```ts
export declare const UUIDOrUndefined: S.UndefinedOr<typeof S.UUID>
```

Added in v0.1.0

## UUIDOrUndefined (type alias)

**Signature**

```ts
export type UUIDOrUndefined = typeof UUIDOrUndefined.Type
```

Added in v0.1.0

## UUIDWithDefault

**Signature**

```ts
export declare const UUIDWithDefault: (
  value: string
) => S.PropertySignature<":", string, never, ":", string, true, never>
```

Added in v0.1.0
