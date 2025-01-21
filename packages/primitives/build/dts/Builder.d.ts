/**
 * This module provides a type-safe, immutable builder pattern implementation
 * using Effect.
 *
 * @since 0.1.0
 */
import { Effect, Schema } from "effect";
/**
 * @since 0.3.0
 * @category models
 */
type SchemaType<F extends Schema.Struct.Fields> = Schema.Schema.Type<
  Schema.Struct<F>
>;
/**
 * @since 0.3.0
 * @category models
 */
export interface Lens<S, A> {
  readonly get: (s: Partial<S>) => A | undefined;
  readonly set: <V extends A>(value: V) => Transform<S>;
  readonly modify: (f: (value: A) => A) => Transform<S>;
}
declare const ValidationError_base: new <A extends Record<string, any> = {}>(
  args: import("effect/Types").Equals<A, {}> extends true
    ? void
    : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P] },
) => import("effect/Cause").YieldableError & {
  readonly _tag: "ValidationError";
} & Readonly<A>;
/**
 * @since 0.3.0
 * @category errors
 */
export declare class ValidationError extends ValidationError_base<{
  readonly message: string;
}> {}
declare const BuilderError_base: new <A extends Record<string, any> = {}>(
  args: import("effect/Types").Equals<A, {}> extends true
    ? void
    : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P] },
) => import("effect/Cause").YieldableError & {
  readonly _tag: "BuilderError";
} & Readonly<A>;
/**
 * @since 0.3.0
 * @category errors
 */
export declare class BuilderError extends BuilderError_base {}
/**
 * @since 0.3.0
 * @category models
 */
export type Transform<A> = (a: Partial<A>) => Partial<A>;
/**
 * @since 0.3.0
 * @category models
 */
export interface BuilderOp<F extends Schema.Struct.Fields, R> {
  readonly schema: Schema.Struct<F>;
  readonly Default: Partial<SchemaType<F>>;
  readonly field: <K extends keyof SchemaType<F>>(
    key: K,
  ) => Lens<SchemaType<F>, SchemaType<F>[K]>;
  readonly when: (
    predicate: (a: Partial<SchemaType<F>>) => boolean,
    ifTrue: Transform<SchemaType<F>>,
    ifFalse?: Transform<SchemaType<F>>,
  ) => Transform<SchemaType<F>>;
  readonly build: (
    transform: Transform<SchemaType<F>>,
  ) => Effect.Effect<SchemaType<F>, ValidationError, R>;
}
/**
 * @since 0.3.0
 * @category models
 */
export type BuilderLens<A> = {
  readonly [K in keyof A]: {
    (value: A[K]): Transform<A>;
    readonly get: (s: Partial<A>) => A[K] | undefined;
    readonly modify: (f: (value: A[K]) => A[K]) => Transform<A>;
  };
};
/**
 * @since 0.3.0
 * @category models
 */
export type Builder<F extends Schema.Struct.Fields, R> = BuilderOp<F, R> &
  Omit<BuilderLens<SchemaType<F>>, keyof BuilderOp<F, R>>;
/**
 * Creates a builder lens for each field in the schema
 *
 * @since 0.3.0
 * @category constructors
 */
export declare const createBuilderLenses: <A>(
  schema: Schema.Struct<any>,
) => BuilderLens<A>;
/**
 * Creates a builder for constructing objects with runtime validation.
 *
 * @since 0.1.0
 * @category constructors
 * @example
 * import { Schema, Effect, pipe } from "effect"
 * import { define, compose } from "@ye/primitives/Builder"
 *
 * const UserSchema = Schema.Struct({
 *   name: Schema.String,
 * })
 *
 * const User = define(UserSchema)
 *
 * const result = Effect.gen(function* () {
 *   return yield* pipe(compose(User.name("John")), User.build)
 * }).pipe(Effect.runSync)
 *
 * console.log("Created user:", result)
 * // {
 */
export declare const define: <F extends Schema.Struct.Fields>(
  schema: Schema.Struct<F>,
  defaults?: Partial<SchemaType<F>>,
) => Builder<F, Schema.Schema.Context<F[keyof F]>>;
/**
 * @since 0.1.0
 * @category combinators
 * @example
 * import { Schema, Effect, pipe } from "effect"
 * import { define, compose } from "@ye/primitives/Builder"
 *
 * const UserSchema = Schema.Struct({
 *   name: Schema.String,
 *   age: Schema.Number,
 *   roles: Schema.Array(Schema.String).annotations({ default: ["user"] })
 * })
 *
 * const User = define(UserSchema)
 *
 * const result = Effect.gen(function* () {
 *   return yield* pipe(
 *      compose(
 *        User.name("John"),
 *        User.age(25),
 *        User.roles.modify((roles) => [...roles, "admin"])
 *      ),
 *      User.build
 *  )
 * }).pipe(Effect.runSync)
 *
 * console.log("Created user:", result)
 * // {
 * //   name: "John",
 * //   age: 25,
 * //   roles: ["admin"]
 * // }
 */
export declare const compose: <A>(
  ...transforms: Array<Transform<A>>
) => Transform<A>;
//# sourceMappingURL=Builder.d.ts.map
