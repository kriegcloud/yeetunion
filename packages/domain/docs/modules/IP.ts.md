---
title: IP.ts
nav_order: 9
parent: Modules
---

## IP overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [IP](#ip)
  - [IP (type alias)](#ip-type-alias)
  - [IPOrNull](#ipornull)
  - [IPOrNull (type alias)](#ipornull-type-alias)
  - [IPv4 (type alias)](#ipv4-type-alias)
  - [IPv6](#ipv6)
  - [IPv6 (type alias)](#ipv6-type-alias)

---

# primitives

## IP

**Signature**

```ts
export declare const IP: S.filter<S.Schema<string, string, never>>
```

Added in v0.1.0

## IP (type alias)

**Signature**

```ts
export type IP = typeof IP.Type
```

Added in v0.1.0

## IPOrNull

**Signature**

```ts
export declare const IPOrNull: S.NullOr<S.filter<S.Schema<string, string, never>>>
```

Added in v0.1.0

## IPOrNull (type alias)

**Signature**

```ts
export type IPOrNull = typeof IP.Type
```

Added in v0.1.0

## IPv4 (type alias)

**Signature**

```ts
export type IPv4 = typeof IPv4.Type
```

Added in v0.1.0

## IPv6

**Signature**

```ts
export declare const IPv6: S.filter<S.Schema<string, string, never>>
```

Added in v0.1.0

## IPv6 (type alias)

**Signature**

```ts
export type IPv6 = typeof IPv6.Type
```

Added in v0.1.0
