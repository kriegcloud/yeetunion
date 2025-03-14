import * as S from "effect/Schema";
import * as AST from "effect/SchemaAST";

import { FormatAnnotationId, FormatEnum } from "./types";

/**
 * Decentralized name.
 */
export const E2N = S.NonEmptyString.pipe(
  S.pattern(/^([a-z][\da-z.-]+)\.([a-z.]{2,6})([/\w-]*)*\/?$/),
  S.annotations({
    [FormatAnnotationId]: FormatEnum.E2N,
    [AST.TitleAnnotationId]: "E2N",
    [AST.DescriptionAnnotationId]: "E2N URI",
    [AST.ExamplesAnnotationId]: ["example.com/type/MyType"],
  }),
);

/**
 * Email address (RFC 5321)
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
export const Email = S.String.pipe(
  S.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  S.annotations({
    [FormatAnnotationId]: FormatEnum.Email,
    [AST.TitleAnnotationId]: "Email",
    [AST.DescriptionAnnotationId]: "Email address",
  }),
);

/**
 *
 */
// TODO(BEEPHOLE!): Implement.
export const Formula = S.String.annotations({
  [FormatAnnotationId]: FormatEnum.Formula,
});

/**
 *
 */
// TODO(BEEPHOLE!): Implement.
export const Hostname = S.String.annotations({
  [FormatAnnotationId]: FormatEnum.Hostname,
});

/**
 *
 */
// TODO(BEEPHOLE!): Implement.
export const JSON = S.String.annotations({
  [FormatAnnotationId]: FormatEnum.JSON,
});

/**
 *
 */
// TODO(BEEPHOLE!): Implement.
export const Markdown = S.String.annotations({
  [FormatAnnotationId]: FormatEnum.Markdown,
});

/**
 * Regex
 * https://json-schema.org/understanding-json-schema/reference/regular_expressions
 * https://ecma-international.org/publications-and-standards/standards/ecma-262
 */
// TODO(BEEPHOLE!): Implement.
export const Regex = S.String.annotations({
  [FormatAnnotationId]: FormatEnum.Regex,
});

/**
 * https://datatracker.ietf.org/doc/html/rfc3986#section-1.1.3
 */
export const URL = S.String.pipe(
  S.pattern(/^(\w+?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/),
  S.annotations({
    [FormatAnnotationId]: FormatEnum.URL,
    [AST.TitleAnnotationId]: "URL",
    [AST.DescriptionAnnotationId]: "URL",
  }),
);

/**
 * UUID (RFC 4122)
 * https://datatracker.ietf.org/doc/html/rfc4122
 */
export const UUID = S.UUID.annotations({
  [FormatAnnotationId]: FormatEnum.UUID,
  [AST.ExamplesAnnotationId]: ["3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a"],
});
