/**
 * @since 0.1.0
 * @category YeForm
 */
"use client";
import { Array, Data, Option } from "effect";
import React, { useContext } from "react";
/**
 * @since 0.1.0
 * @category YeForm
 */
interface StringToken {
  _tag: "StringToken";
  value: string;
}
/**
 * @since 0.1.0
 * @category YeForm
 */
interface IndexToken {
  _tag: "IndexToken";
}
/**
 * @since 0.1.0
 * @category YeForm
 */
type Token = StringToken | IndexToken;
/**
 * @since 0.1.0
 * @category YeForm
 */
const { IndexToken, StringToken } = Data.taggedEnum<Token>();
/**
 * @since 0.1.0
 * @category YeForm
 */
const ArrayIndexesContext = React.createContext<ReadonlyArray<number>>([]);
/**
 * @since 0.1.0
 * @category YeForm
 */
const ArrayIndexesProvider: React.FC<{
  children: React.ReactNode;
  index: number;
}> = ({ children, index }) => {
  const indexes = useContext(ArrayIndexesContext);

  return (
    <ArrayIndexesContext.Provider value={indexes.concat(index)}>
      {children}
    </ArrayIndexesContext.Provider>
  );
};
/**
 * @since 0.1.0
 * @category YeForm
 */
export const Provider = ArrayIndexesProvider;
/**
 * @since 0.1.0
 * @category YeForm
 */
export const usePath = (path: Path): string => {
  const indexes = useContext(ArrayIndexesContext);
  return path.toString(indexes);
};
/**
 * @since 0.1.0
 * @category YeForm
 */
export const useIndex = (): number => {
  const indexes = useContext(ArrayIndexesContext);
  if (!Array.isNonEmptyReadonlyArray(indexes)) {
    throw new Error(
      "Tried to call useIndex() without any array indexes being provided. Make sure your call to useIndex() is rendered under a <Fields></Fields> tag."
    );
  }

  return Array.lastNonEmpty(indexes);
};
/**
 * @since 0.1.0
 * @category YeForm
 */
export class Path {
  private constructor(private readonly tokens: ReadonlyArray<Token>) {}

  static empty = new Path([]);

  get isEmpty() {
    return this.tokens.length === 0;
  }

  private append(token: Token): Path {
    return new Path(this.tokens.concat(token));
  }

  appendString(value: string): Path {
    return this.append(StringToken({ value }));
  }

  appendIndex(): Path {
    return this.append(IndexToken());
  }

  get pretty(): string {
    return this.tokens
      .map((token) => (token._tag === "IndexToken" ? "{i}" : token.value))
      .join(".");
  }

  toString(indexes: ReadonlyArray<number> = []): string {
    let i = 0;
    let s = "";
    for (const token of this.tokens) {
      if (token._tag === "StringToken") {
        s = s.concat(".", token.value);
      } else {
        const index = Array.get(indexes, i);
        if (Option.isSome(index)) {
          s = s.concat(".", String(index.value));
        } else {
          throw new Error(`Missing index ${i} in ${this.pretty}`);
        }
        i += 1;
      }
    }
    return s.slice(1);
  }
}
