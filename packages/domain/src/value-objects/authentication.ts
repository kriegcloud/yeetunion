import ye from "#primitives";
/**
 * @since 0.1.0
 * @category value-objects
 */
import * as S from "effect/Schema";

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Signin
 *--------------------------------------------------------------------------------------------------------------------*/

/**
 * @since 0.1.0
 * @category value-objects
 */
export const SigninInput = S.Struct({
  email: ye.Email,
  password: ye.Str,
  rememberMe: ye.BoolWithDefault(false),
});

/**
 * @since 0.1.0
 * @category value-objects
 */
export type SigninInput = typeof SigninInput.Type;

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Signup
 *--------------------------------------------------------------------------------------------------------------------*/
/**
 * @since 0.1.0
 * @category value-objects
 */
export const SignupInput = S.Struct({
  name: ye.NonEmptyTrimStr,
  email: ye.Email,
  password: ye.Str,
  passwordConfirmation: ye.Str,
});

/**
 * @since 0.1.0
 * @category value-objects
 */
export type SignupInput = typeof SignupInput.Type;

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Forgot Password
 *--------------------------------------------------------------------------------------------------------------------*/
/**
 * @since 0.1.0
 * @category value-objects
 */
export const ForgotPasswordInput = S.Struct({
  email: ye.Email,
});
/**
 * @since 0.1.0
 * @category value-objects
 */
export type ForgotPasswordInput = typeof ForgotPasswordInput.Type;

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Reset Password
 *--------------------------------------------------------------------------------------------------------------------*/
export const ResetPasswordInput = S.Struct({
  token: ye.NonEmptyTrimStr,
  password: ye.Str,
  passwordConfirmation: ye.Str,
});

/**
 * @since 0.1.0
 * @category value-objects
 */
export type ResetPasswordInput = typeof ResetPasswordInput.Type;

/*----------------------------------------------------------------------------------------------------------------------
 |  TITLE: Two Factor
 *--------------------------------------------------------------------------------------------------------------------*/

/**
 * @since 0.1.0
 * @category value-objects
 */
export const TwoFactorInput = S.Struct({
  code: ye.NonEmptyTrimStr,
});

/**
 * @since 0.1.0
 * @category value-objects
 */
export type TwoFactorInput = typeof TwoFactorInput.Type;
