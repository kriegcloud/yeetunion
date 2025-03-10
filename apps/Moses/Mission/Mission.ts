import * as R from "effect/Record";
import * as S from "effect/Schema";
import { Step } from "./Step";

/**
 * @since 0.1.0
 */
export type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends `${infer T}${D}${infer U}`
    ? [T, ...Split<U, D>]
    : [S];

/**
 * @since 0.1.0
 */
export type JoinWithSpace<T extends readonly string[]> = T extends []
  ? ""
  : T extends [infer F extends string]
    ? F
    : T extends [infer F extends string, ...infer R extends string[]]
      ? `${F}${" "}${JoinWithSpace<R>}`
      : "";

/**
 * @since 0.1.0
 */
export type KeyToName<T extends string> =
  T extends `${infer _First}_${infer _Rest}`
    ? JoinWithSpace<Split<T, "_">>
    : T extends `${infer V}`
      ? V
      : never;

/**
 * @since 0.1.0
 */
export const formatKeyEnumToName = <T extends string>(value: T): KeyToName<T> =>
  (value.includes("_") ? value.split("_").join(" ") : value) as KeyToName<T>;

/**
 * @since 0.1.0
 */
export const keyToName = <T extends string>(value: T): KeyToName<T> =>
  (value.includes("_") ? value.split("_").join(" ") : value) as KeyToName<T>;

export namespace Mission {
  export const KEY_REGEX = /^[A-Z][A-Z0-9_]*$/;

  export const Key = S.NonEmptyTrimmedString.pipe(
    S.uppercased(),
    S.pattern(KEY_REGEX || "Key must be Capitalized SnakeCase"),
    S.brand("MissionKey"),
  );

  const Event = S.Union(
    S.Struct({
      type: S.NonEmptyTrimmedString.pipe(S.uppercased()),
    }),
    S.Struct({
      type: S.NonEmptyTrimmedString.pipe(S.uppercased()),
      payload: S.Record({
        key: S.NonEmptyString,
        value: S.Any,
      }),
    }),
  );

  const Events = S.Record({
    key: S.NonEmptyString,
    value: Event,
  });
  export type Events = typeof Events.Type;

  export const Schema = S.Struct({
    key: Key,
    steps: S.Record({ key: S.NonEmptyTrimmedString, value: Step.Schema }),
    events: Events,
  });

  export type Type = typeof Schema.Type;

  export class Class extends S.Class<Class>("Mission")(Schema) {
    get header() {
      return keyToName(this.key);
    }
  }

  export const make =
    <TKey extends string>(key: TKey) =>
    <
      TEventTypes extends string,
      TFields extends { type: TEventTypes; payload?: S.Struct.Fields },
      TEvents extends R.ReadonlyRecord<string, TFields>,
      TSteps extends R.ReadonlyRecord<string, Step.Type>,
    >({
      steps,
      events,
    }: {
      steps: TSteps;
      events: TEvents;
    }) => {
      const _def = Class.make({ key: Key.make(key), steps, events });

      const EventSchemas = R.fromEntries(
        R.toEntries(events).map(([k, v]) =>
          v.payload
            ? [
                k,
                S.Struct({
                  type: S.Literal(v.type),
                  payload: S.Struct(v.payload),
                }),
              ]
            : [k, S.Struct({ type: S.Literal(v.type) })],
        ),
      ) as {
        [K in keyof TEvents]: TEvents[K]["payload"] extends S.Struct.Fields
          ? S.Struct<{
              type: S.Literal<[TEventTypes]>;
              payload: S.Struct<TEvents[K]["payload"]>;
            }>
          : S.Struct<{ type: S.Literal<[TEventTypes]> }>;
      };

      const EventUnion = S.Union(...R.values(EventSchemas));

      return {
        _def,
        steps,
        events,
        EventUnion,
        EventSchemas,
      };
    };
}
