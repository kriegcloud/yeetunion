import { BottomAction } from "@e2/moses/src/Moses";
import * as M from "effect/Match";
import * as R from "effect/Record";
import * as S from "effect/Schema";
import { Form } from "./Form";
export namespace View {
  export const TAGS = {
    SCAN: "SCAN",
    FORM: "FORM",
    LOADING: "LOADING",
    ERROR: "ERROR",
    LIST: "LIST",
    DETAIL: "DETAIL",
    SUMMARY: "SUMMARY",
  } as const;

  export const ViewPropsBase = {
    instruction: S.NonEmptyString.pipe(S.uppercased()),
    instructionHeader: S.optional(S.NonEmptyString.pipe(S.uppercased())),
    bottomActions: S.optional(S.Array(BottomAction.Schema)),
  };

  export const ScanView = S.TaggedStruct(TAGS.SCAN, ViewPropsBase);

  export const FormView = S.TaggedStruct(TAGS.FORM, {
    ...ViewPropsBase,
    form: Form.Schema,
  });

  export const LoadingView = S.TaggedStruct(TAGS.LOADING, ViewPropsBase); // TODO implement

  export const ErrorView = S.TaggedStruct(TAGS.ERROR, ViewPropsBase);

  export const ListView = S.TaggedStruct(TAGS.LIST, ViewPropsBase); // TODO implement

  export const DetailView = S.TaggedStruct(TAGS.DETAIL, ViewPropsBase); // TODO implement

  export const SummaryView = S.TaggedStruct(TAGS.SUMMARY, ViewPropsBase); // TODO implement

  export const Schema = S.Union(
    ScanView,
    FormView,
    LoadingView,
    ErrorView,
    ListView,
    DetailView,
    SummaryView,
  );
  export type Type = typeof Schema.Type;

  export const make = <TView extends Type>(value: TView) =>
    M.type<Type>().pipe(
      M.tag(TAGS.SCAN, (m) => ScanView.make(m)),
      M.tag(TAGS.FORM, (m) => FormView.make(m)),
      M.tag(TAGS.LOADING, (m) => LoadingView.make(m)),
      M.tag(TAGS.ERROR, (m) => ErrorView.make(m)),
      M.tag(TAGS.LIST, (m) => ListView.make(m)),
      M.tag(TAGS.DETAIL, (m) => DetailView.make(m)),
      M.tag(TAGS.SUMMARY, (m) => SummaryView.make(m)),
      M.exhaustive,
    )(value);
}
