import * as O from "effect/Option";
import * as R from "effect/Record";
import * as MTypes from "./Types";

/**
 * @since 0.1.0
 * @category Mappers
 * @param obj
 * @param fn
 */
export const mapValues = <T, U>(
  obj: Record<string, T>,
  fn: (value: T, key: string) => U,
): Record<string, U> => {
  const result: Record<string, U> = {};
  Object.keys(obj).forEach((key) => {
    result[key] = fn(R.get(key)(obj).pipe(O.getOrThrow), key);
  });
  return result;
};

/**
 * Recursively maps values traversing arrays and objects.
 * @param value
 * @param fn Function to apply to each value. The Second argument is a function to recurse into the value.
 */
export const deepMapValues = (
  value: MTypes.AnyType,
  fn: (
    value: MTypes.AnyType,
    recurse: (value: MTypes.AnyType) => MTypes.AnyType,
    key: string | number | undefined,
  ) => MTypes.AnyType,
): MTypes.AnyType => {
  return new DeepMapper(fn).map(value);
};

class DeepMapper {
  private readonly _cyclic = new Map<MTypes.AnyType, MTypes.AnyType>();

  constructor(
    private readonly _fn: (
      value: MTypes.AnyType,
      recurse: (value: MTypes.AnyType) => MTypes.AnyType,
      key: string | number | undefined,
    ) => MTypes.AnyType,
  ) {}

  map(value: MTypes.AnyType): MTypes.AnyType {
    return this._map(value, undefined);
  }

  private _map(
    value: MTypes.AnyType,
    key: string | number | undefined,
  ): MTypes.AnyType {
    if (this._cyclic.has(value)) {
      return this._cyclic.get(value);
    }

    return this._fn(value, this._recurse, key);
  }

  private _recurse = (value: MTypes.AnyType) => {
    if (this._cyclic.has(value)) {
      return this._cyclic.get(value);
    }

    if (Array.isArray(value)) {
      const res = new Array(value.length);
      this._cyclic.set(value, res);
      for (let i = 0; i < value.length; i++) {
        res[i] = this._map(value[i], i);
      }
      return res;
    }
    if (value !== null && typeof value === "object") {
      const res: MTypes.AnyType = {};
      this._cyclic.set(value, res);
      for (const key in value) {
        res[key] = this._map(value[key], key);
      }
      return res;
    }
    return value;
  };
}

/**
 * Recursively maps values traversing arrays and objects.
 * @param value
 * @param fn Function to apply to each value. The Second argument is a function to recurse into the value.
 * Async version.
 */
export const deepMapValuesAsync = (
  value: MTypes.AnyType,
  fn: (
    value: MTypes.AnyType,
    recurse: (value: MTypes.AnyType) => Promise<MTypes.AnyType>,
    key: string | number | undefined,
  ) => Promise<MTypes.AnyType>,
): Promise<MTypes.AnyType> => {
  return new DeepMapperAsync(fn).map(value);
};

class DeepMapperAsync {
  private readonly _cyclic = new Map<MTypes.AnyType, MTypes.AnyType>();

  constructor(
    private readonly _fn: (
      value: MTypes.AnyType,
      recurse: (value: MTypes.AnyType) => Promise<MTypes.AnyType>,
      key: string | number | undefined,
    ) => Promise<MTypes.AnyType>,
  ) {}

  map(value: MTypes.AnyType): Promise<MTypes.AnyType> {
    return this._map(value, undefined);
  }

  private _map(
    value: MTypes.AnyType,
    key: string | number | undefined,
  ): Promise<MTypes.AnyType> {
    if (this._cyclic.has(value)) {
      return this._cyclic.get(value);
    }

    return this._fn(value, this._recurse, key);
  }

  private _recurse = async (value: MTypes.AnyType) => {
    if (this._cyclic.has(value)) {
      return this._cyclic.get(value);
    }

    if (Array.isArray(value)) {
      const res = new Array(value.length);
      this._cyclic.set(value, res);
      for (let i = 0; i < value.length; i++) {
        res[i] = await this._map(value[i], i);
      }
      return res;
    }
    if (value !== null && typeof value === "object") {
      const res: MTypes.AnyType = {};
      this._cyclic.set(value, res);
      for (const key in value) {
        res[key] = await this._map(value[key], key);
      }
      return res;
    }
    return value;
  };
}
