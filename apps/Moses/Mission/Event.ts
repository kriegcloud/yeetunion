import * as F from "effect/Function";
import * as R from "effect/Record";
import * as S from "effect/Schema";

export namespace Event {
  const Schema = S.Union(
    S.Struct({
      type: S.NonEmptyTrimmedString.pipe(S.uppercased()),
    }),
    S.Struct({
      type: S.NonEmptyTrimmedString.pipe(S.uppercased()),
      payload: S.Record({ key: S.NonEmptyString, value: S.Any }),
    }),
  );
  export type Type = typeof Schema.Type;

  const RecordSchema = S.Record({
    key: S.NonEmptyString,
    value: Schema,
  });
  export type RecordType = typeof RecordSchema.Type;

  export type EventSchemaEnumFromEventRecords<
    TEventTypes extends string,
    TFields extends { type: TEventTypes; payload?: S.Struct.Fields },
    TEvents extends R.ReadonlyRecord<string, TFields>,
  > = {
    [K in keyof TEvents]: TEvents[K]["payload"] extends S.Struct.Fields
      ? S.Struct<{
          type: S.Literal<[TEventTypes]>;
          payload: S.Struct<TEvents[K]["payload"]>;
        }>
      : S.Struct<{ type: S.Literal<[TEventTypes]> }>;
  };

  export const EventSchemaEnumFromRecords = <
    TEventTypes extends string,
    TFields extends { type: TEventTypes; payload?: S.Struct.Fields },
    TEvents extends R.ReadonlyRecord<string, TFields>,
  >(
    events: TEvents,
  ) =>
    R.fromEntries(
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
    ) as EventSchemaEnumFromEventRecords<TEventTypes, TFields, TEvents>;

  export const UnionFromRecords = <
    const TEventTypes extends string,
    TFields extends { type: TEventTypes; payload?: S.Struct.Fields },
    TEvents extends R.ReadonlyRecord<string, TFields>,
  >(
    events: TEvents,
  ) =>
    F.pipe(EventSchemaEnumFromRecords(events), (events) =>
      S.Union(...R.values(events)),
    );

  export type EventTypeEnumFromEventRecords<
    TEventTypes extends string,
    TFields extends { type: TEventTypes; payload?: S.Struct.Fields },
    TEvents extends R.ReadonlyRecord<string, TFields>,
  > = {
    [K in keyof TEvents]: TEvents[K]["type"];
  };

  export const EventTypeEnumFromRecords = <
    TEventTypes extends string,
    TFields extends { type: TEventTypes; payload?: S.Struct.Fields },
    TEvents extends R.ReadonlyRecord<string, TFields>,
  >(
    events: TEvents,
  ) =>
    R.fromEntries(
      R.toEntries(events).map(([_, v]) => [v.type, v.type]),
    ) as EventTypeEnumFromEventRecords<TEventTypes, TFields, TEvents>;

  export const make = <
    TEventTypes extends string,
    TFields extends { type: TEventTypes; payload?: S.Struct.Fields },
    TEvents extends R.ReadonlyRecord<string, TFields>,
  >(
    events: TEvents,
  ) => {
    const EventSchemas = EventSchemaEnumFromRecords(events);
    const EventUnion = UnionFromRecords(events);
    const EventTypes = EventTypeEnumFromRecords(events);

    return {
      EventSchemas,
      EventUnion,
      EventTypes,
    };
  };
}
