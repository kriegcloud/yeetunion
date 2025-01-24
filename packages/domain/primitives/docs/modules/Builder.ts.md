---
title: Builder.ts
nav_order: 3
parent: Modules
---

## Builder overview

This module provides a type-safe, immutable builder pattern implementation
using Effect.

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [combinators](#combinators)
  - [compose](#compose)
- [constructors](#constructors)
  - [createBuilderLenses](#createbuilderlenses)
  - [define](#define)
- [errors](#errors)
  - [BuilderError (class)](#buildererror-class)
  - [ValidationError (class)](#validationerror-class)
- [models](#models)
  - [Builder (type alias)](#builder-type-alias)
  - [BuilderLens (type alias)](#builderlens-type-alias)
  - [BuilderOp (interface)](#builderop-interface)
  - [Lens (interface)](#lens-interface)
  - [Transform (type alias)](#transform-type-alias)

---

# combinators

## compose

**Signature**

```ts
export declare const compose: <A>(...transforms: Array<Transform<A>>) => Transform<A>
```

**Example**

```ts
import { Schema, Effect, pipe } from "effect"
import { define, compose } from "@ye/primitives/Builder"

const UserSchema = Schema.Struct({
  name: Schema.String,
  age: Schema.Number,
  roles: Schema.Array(Schema.String).annotations({ default: ["user"] })
})

const User = define(UserSchema)

const result = Effect.gen(function* () {
  return yield* pipe(
    compose(
      User.name("John"),
      User.age(25),
      User.roles.modify((roles) => [...roles, "admin"])
    ),
    User.build
  )
}).pipe(Effect.runSync)

console.log("Created user:", result)
// {
//   name: "John",
//   age: 25,
//   roles: ["admin"]
// }
```

Added in v0.1.0

# constructors

## createBuilderLenses

Creates a builder lens for each field in the schema

**Signature**

```ts
export declare const createBuilderLenses: <A>(schema: Schema.Struct<any>) => BuilderLens<A>
```

Added in v0.3.0

## define

Creates a builder for constructing objects with runtime validation.

**Signature**

```ts
export declare const define: <F extends Schema.Struct.Fields>(
  schema: Schema.Struct<F>,
  defaults?: Partial<SchemaType<F>>
) => Builder<F, Schema.Schema.Context<F[keyof F]>>
```

**Example**

```ts
import { Schema, Effect, pipe } from "effect"
import { define, compose } from "@ye/primitives/Builder"

const UserSchema = Schema.Struct({
  name: Schema.String
})

const User = define(UserSchema)

const result = Effect.gen(function* () {
  return yield* pipe(compose(User.name("John")), User.build)
}).pipe(Effect.runSync)

console.log("Created user:", result)
// {
```

Added in v0.1.0

# errors

## BuilderError (class)

**Signature**

```ts
export declare class BuilderError
```

Added in v0.3.0

## ValidationError (class)

**Signature**

```ts
export declare class ValidationError
```

Added in v0.3.0

# models

## Builder (type alias)

**Signature**

```ts
export type Builder<F extends Schema.Struct.Fields, R> = BuilderOp<F, R> &
  Omit<BuilderLens<SchemaType<F>>, keyof BuilderOp<F, R>>
```

Added in v0.3.0

## BuilderLens (type alias)

**Signature**

```ts
export type BuilderLens<A> = {
  readonly [K in keyof A]: {
    (value: A[K]): Transform<A>
    readonly get: (s: Partial<A>) => A[K] | undefined
    readonly modify: (f: (value: A[K]) => A[K]) => Transform<A>
  }
}
```

Added in v0.3.0

## BuilderOp (interface)

**Signature**

```ts
export interface BuilderOp<F extends Schema.Struct.Fields, R> {
  readonly schema: Schema.Struct<F>
  readonly Default: Partial<SchemaType<F>>
  readonly field: <K extends keyof SchemaType<F>>(key: K) => Lens<SchemaType<F>, SchemaType<F>[K]>
  readonly when: (
    predicate: (a: Partial<SchemaType<F>>) => boolean,
    ifTrue: Transform<SchemaType<F>>,
    ifFalse?: Transform<SchemaType<F>>
  ) => Transform<SchemaType<F>>
  readonly build: (transform: Transform<SchemaType<F>>) => Effect.Effect<SchemaType<F>, ValidationError, R>
}
```

Added in v0.3.0

## Lens (interface)

**Signature**

```ts
export interface Lens<S, A> {
  readonly get: (s: Partial<S>) => A | undefined
  readonly set: <V extends A>(value: V) => Transform<S>
  readonly modify: (f: (value: A) => A) => Transform<S>
}
```

Added in v0.3.0

## Transform (type alias)

**Signature**

```ts
export type Transform<A> = (a: Partial<A>) => Partial<A>
```

Added in v0.3.0
