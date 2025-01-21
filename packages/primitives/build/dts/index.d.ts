/**
 * This module provides a type-safe, immutable builder pattern implementation
 * using Effect.
 *
 * @since 0.1.0
 */
import * as Builder from "./Builder.js";
declare const _default: {
  UUID: typeof import("effect/Schema").UUID;
  UUIDOrNull: import("effect/Schema").NullOr<
    typeof import("effect/Schema").UUID
  >;
  UUIDOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").UUID
  >;
  UUIDOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").UUID
  >;
  UUIDOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").UUID
  >;
  UUIDWithDefault: (
    value: string,
  ) => import("effect/Schema").PropertySignature<
    ":",
    string,
    never,
    ":",
    string,
    true,
    never
  >;
  default: {
    UUID: typeof import("effect/Schema").UUID;
    UUIDOrNull: import("effect/Schema").NullOr<
      typeof import("effect/Schema").UUID
    >;
    UUIDOrUndefined: import("effect/Schema").UndefinedOr<
      typeof import("effect/Schema").UUID
    >;
    UUIDOrNullish: import("effect/Schema").NullishOr<
      typeof import("effect/Schema").UUID
    >;
    UUIDOptional: import("effect/Schema").optional<
      typeof import("effect/Schema").UUID
    >;
    UUIDWithDefault: (
      value: string,
    ) => import("effect/Schema").PropertySignature<
      ":",
      string,
      never,
      ":",
      string,
      true,
      never
    >;
  };
  EnumWithDefault: <TEnum extends import("effect/Schema").EnumsDefinition>(
    enums: TEnum,
  ) => (
    defaultValue: () => import("effect/Types").NoInfer<TEnum[keyof TEnum]>,
  ) => import("effect/Schema").PropertySignature<
    ":",
    TEnum[keyof TEnum],
    never,
    ":",
    TEnum[keyof TEnum],
    true,
    never
  >;
  ReadonlySetFromArray: <A, I, R>(
    itemSchema: import("effect/Schema").Schema<A, I, R>,
  ) => import("effect/Schema").Schema<ReadonlySet<A>, ReadonlyArray<I>, R>;
  StructFromReadonlyArray: <
    T extends import("effect/Array").NonEmptyReadonlyArray<
      import("@effect/schema/AST").LiteralValue
    >,
    TSchema extends import("effect/Schema").Schema<string>,
  >(
    arr: T,
    valueSchema: TSchema,
  ) => import("effect/Schema").Struct<any>;
  UnionOfLiteralsFromRecordValues: <
    TRecord extends import("effect/Record").ReadonlyRecord<string, string>,
  >(
    record: TRecord,
  ) => import("effect/Schema").Schema<string, string, never>;
  EnumFromReadonlyArray: <
    const T extends import("effect/Array").NonEmptyReadonlyArray<
      import("@effect/schema/AST").LiteralValue
    >,
  >(
    arr: T,
  ) => import("effect/Schema").Enums<any>;
  ReadonlyArrayToUnionOfLiterals: <
    const T extends import("effect/Array").NonEmptyReadonlyArray<
      import("@effect/schema/AST").LiteralValue
    >,
  >(
    arr: T,
  ) => import("effect/Schema").Schema<T[number], T[number], never>;
  UpperCasedLiteral: <const T extends string>(
    str: T,
  ) => import("effect/Schema").Literal<[Uppercase<T>]>;
  URL: import("effect/Schema").filter<
    import("effect/Schema").Schema<string, string, never>
  >;
  URLOrNull: import("effect/Schema").NullOr<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  URLOrUndefined: import("effect/Schema").UndefinedOr<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  URLOrNullish: import("effect/Schema").NullishOr<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  URLOptional: import("effect/Schema").optional<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  URLWithDefault: (
    value: string,
  ) => import("effect/Schema").PropertySignature<
    ":",
    string,
    never,
    ":",
    string,
    true,
    never
  >;
  Str: typeof import("effect/Schema").String;
  StrOrNull: import("effect/Schema").NullOr<
    typeof import("effect/Schema").String
  >;
  StrOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").String
  >;
  StrOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").String
  >;
  StrOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").String
  >;
  StrWithDefault: (
    value: string,
  ) => import("effect/Schema").PropertySignature<
    ":",
    string,
    never,
    ":",
    string,
    true,
    never
  >;
  NextPath: import("effect/Schema").brand<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >,
    "@ye/primitives/NextPath"
  >;
  Num: typeof import("effect/Schema").Number;
  NumOrNull: import("effect/Schema").NullOr<
    typeof import("effect/Schema").Number
  >;
  NumOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").Number
  >;
  NumOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").Number
  >;
  NumOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").Number
  >;
  NumWithDefault: (
    value: number,
  ) => import("effect/Schema").PropertySignature<
    ":",
    number,
    never,
    ":",
    number,
    true,
    never
  >;
  PosNum: import("effect/Schema").brand<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<number, number, never>
    >,
    "@/primitives/PosNum"
  >;
  PosNumOrNull: import("effect/Schema").NullOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosNum"
    >
  >;
  PosNumOrUndefined: import("effect/Schema").UndefinedOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosNum"
    >
  >;
  PosNumOrNullish: import("effect/Schema").NullishOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosNum"
    >
  >;
  PosNumOptional: import("effect/Schema").optional<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosNum"
    >
  >;
  PosNumWithDefault: (
    value: number,
  ) => import("effect/Schema").PropertySignature<
    ":",
    number & import("effect/Brand").Brand<"@/primitives/PosNum">,
    never,
    ":",
    number,
    true,
    never
  >;
  NegNum: import("effect/Schema").brand<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<number, number, never>
    >,
    "@/primitives/NegNum"
  >;
  NegNumOrNull: import("effect/Schema").NullOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegNum"
    >
  >;
  NegNumOrUndefined: import("effect/Schema").UndefinedOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegNum"
    >
  >;
  NegNumOrNullish: import("effect/Schema").NullishOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegNum"
    >
  >;
  NegNumOptional: import("effect/Schema").optional<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegNum"
    >
  >;
  NegNumWithDefault: (
    value: number,
  ) => import("effect/Schema").PropertySignature<
    ":",
    number & import("effect/Brand").Brand<"@/primitives/NegNum">,
    never,
    ":",
    number,
    true,
    never
  >;
  NonEmptyStr: typeof import("effect/Schema").NonEmptyTrimmedString;
  NonEmptyStrOrNull: import("effect/Schema").NullOr<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyStrOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyStrOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyStrOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyStrWithDefault: (
    value: string,
  ) => import("effect/Schema").PropertySignature<
    ":",
    string,
    never,
    ":",
    string,
    true,
    never
  >;
  NonEmptyTrimStr: typeof import("effect/Schema").NonEmptyTrimmedString;
  NonEmptyTrimStrOrNull: import("effect/Schema").NullOr<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyTrimStrOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyTrimStrOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyTrimStrOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").NonEmptyTrimmedString
  >;
  NonEmptyTrimStrWithDefault: (
    value: string,
  ) => import("effect/Schema").PropertySignature<
    ":",
    string,
    never,
    ":",
    string,
    true,
    never
  >;
  Int: typeof import("effect/Schema").Int;
  IntOrNull: import("effect/Schema").NullOr<typeof import("effect/Schema").Int>;
  IntOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").Int
  >;
  IntOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").Int
  >;
  IntOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").Int
  >;
  IntWithDefault: (
    value: number,
  ) => import("effect/Schema").PropertySignature<
    ":",
    number,
    never,
    ":",
    number,
    true,
    never
  >;
  PosInt: import("effect/Schema").brand<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<number, number, never>
    >,
    "@/primitives/PosInt"
  >;
  PosIntOrNull: import("effect/Schema").NullOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosInt"
    >
  >;
  PosIntOrUndefined: import("effect/Schema").UndefinedOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosInt"
    >
  >;
  PosIntOrNullish: import("effect/Schema").NullishOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosInt"
    >
  >;
  PosIntOptional: import("effect/Schema").optional<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/PosInt"
    >
  >;
  PosIntWithDefault: (
    value: number,
  ) => import("effect/Schema").PropertySignature<
    ":",
    number & import("effect/Brand").Brand<"@/primitives/PosInt">,
    never,
    ":",
    number,
    true,
    never
  >;
  NegInt: import("effect/Schema").brand<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<number, number, never>
    >,
    "@/primitives/NegInt"
  >;
  NegIntOrNull: import("effect/Schema").NullOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegInt"
    >
  >;
  NegIntOrUndefined: import("effect/Schema").UndefinedOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegInt"
    >
  >;
  NegIntOrNullish: import("effect/Schema").NullishOr<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegInt"
    >
  >;
  NegIntOptional: import("effect/Schema").optional<
    import("effect/Schema").brand<
      import("effect/Schema").filter<
        import("effect/Schema").Schema<number, number, never>
      >,
      "@/primitives/NegInt"
    >
  >;
  NegIntWithDefault: (
    value: number,
  ) => import("effect/Schema").PropertySignature<
    ":",
    number & import("effect/Brand").Brand<"@/primitives/NegInt">,
    never,
    ":",
    number,
    true,
    never
  >;
  IPv6: import("effect/Schema").filter<
    import("effect/Schema").Schema<string, string, never>
  >;
  IP: import("effect/Schema").filter<
    import("effect/Schema").Schema<string, string, never>
  >;
  IPOrNull: import("effect/Schema").NullOr<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  Hex: import("effect/Schema").filter<
    import("effect/Schema").Schema<string, string, never>
  >;
  Email: import("effect/Schema").filter<
    import("effect/Schema").Schema<string, string, never>
  >;
  EmailOrNull: import("effect/Schema").NullOr<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  EmailOrUndefined: import("effect/Schema").UndefinedOr<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  EmailOrNullish: import("effect/Schema").NullishOr<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  EmailOptional: import("effect/Schema").optional<
    import("effect/Schema").filter<
      import("effect/Schema").Schema<string, string, never>
    >
  >;
  EmailWithDefault: (
    value: string,
  ) => import("effect/Schema").PropertySignature<
    ":",
    string,
    never,
    ":",
    string,
    true,
    never
  >;
  DateTime: typeof import("effect/Schema").Date;
  DateTimeOrNull: import("effect/Schema").NullOr<
    typeof import("effect/Schema").Date
  >;
  DateTimeOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").Date
  >;
  DateTimeOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").Date
  >;
  DateTimeOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").Date
  >;
  DateTimeWithDefault: (
    value: Date,
  ) => import("effect/Schema").PropertySignature<
    ":",
    Date,
    never,
    ":",
    string,
    true,
    never
  >;
  Brand: <T extends `@ye/${string}`>(
    str: T,
  ) => (
    self: import("effect/Schema").Schema.AnyNoContext,
  ) => import("effect/Schema").brand<
    import("effect/Schema").Schema.AnyNoContext,
    T
  >;
  Bool: typeof import("effect/Schema").Boolean;
  BoolOrNull: import("effect/Schema").NullOr<
    typeof import("effect/Schema").Boolean
  >;
  BoolOrUndefined: import("effect/Schema").UndefinedOr<
    typeof import("effect/Schema").Boolean
  >;
  BoolOrNullish: import("effect/Schema").NullishOr<
    typeof import("effect/Schema").Boolean
  >;
  BoolOptional: import("effect/Schema").optional<
    typeof import("effect/Schema").Boolean
  >;
  BoolWithDefault: (
    value: boolean,
  ) => import("effect/Schema").PropertySignature<
    ":",
    boolean,
    never,
    ":",
    boolean,
    true,
    never
  >;
  ValidationError: typeof Builder.ValidationError;
  BuilderError: typeof Builder.BuilderError;
  createBuilderLenses: <A>(
    schema: import("effect/Schema").Struct<any>,
  ) => Builder.BuilderLens<A>;
  define: <F extends import("effect/Schema").Struct.Fields>(
    schema: import("effect/Schema").Struct<F>,
    defaults?: Partial<
      import("effect/Schema").Struct.Type<F> extends infer T
        ? { [K in keyof T]: import("effect/Schema").Struct.Type<F>[K] }
        : never
    >,
  ) => Builder.Builder<F, import("effect/Schema").Schema.Context<F[keyof F]>>;
  compose: <A>(
    ...transforms: Array<Builder.Transform<A>>
  ) => Builder.Transform<A>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map
