---
title: Brand.ts
nav_order: 2
parent: Modules
---

## Brand overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [primitives](#primitives)
  - [Brand](#brand)

---

# primitives

## Brand

**Signature**

```ts
export declare const Brand: <T extends `@ye/${string}`>(
  str: T
) => (self: S.Schema.AnyNoContext) => S.brand<S.Schema.AnyNoContext, T>
```

Added in v0.1.0
