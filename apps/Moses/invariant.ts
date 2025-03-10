/**
 * @since 0.1.0
 * @category Invariants
 */
export type InvariantFn = (
  condition: unknown,
  message?: string,
) => asserts condition;

/**
 * Asserts that the condition is true.
 * @since 0.1.0
 * @category Invariants
 * @param condition
 * @param message Optional message. If it starts with "BUG," then the program will break if this invariant fails if the debugger is attached.
 */
export const invariant: InvariantFn = (
  condition: unknown,
  message?: string,
): asserts condition => {
  if (condition) {
    return;
  }

  if (message?.startsWith("BUG")) {
    // biome-ignore lint/suspicious/noDebugger: <explanation>
    debugger;
  }

  let errorMessage = "invariant violation";

  if (message) {
    errorMessage += `: ${message}`;
  }

  throw new InvariantViolation(errorMessage);
};

export class InvariantViolation extends Error {
  constructor(message: string) {
    super(message);
    // NOTE: Restores a prototype chain (https://stackoverflow.com/a/48342359).
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const failedInvariant = (
  message1?: unknown,
  message2?: string,
): never => {
  let errorMessage = "invariant violation";

  const message = [message1, message2]
    .filter((str) => typeof str === "string")
    .join(" ");
  if (message) {
    errorMessage += `: ${message}`;
  }

  throw new InvariantViolation(errorMessage);
};
