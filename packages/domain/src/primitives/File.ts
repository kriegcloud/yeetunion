import { Arbitrary } from "effect";
import * as S from "effect/Schema";
export const FileFromSelf = S.declare(
  (input: unknown): input is File => input instanceof File,
  {
    identifier: "FileFromSelf",
    // Provide a function to generate random File instances
    arbitrary: () => (fc) =>
      fc
        .tuple(fc.string(), fc.string())
        .map(([content, path]) => new File([content], path)),
  },
);

export const FileFromSelfOrNull = S.NullOr(FileFromSelf);

export const FileArb = Arbitrary.make(FileFromSelf);
