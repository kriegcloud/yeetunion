// https://w3c.github.io/webauthn/#enum-transport
import * as S from '@effect/schema/Schema';

export const AuthenticatorTransportFuture = S.Literal(
  'ble',
  'internal',
  'nfc',
  'usb',
  'cable',
  'smart-card',
  'hybrid'
);

// https://w3c.github.io/webauthn/#dom-authenticatorselectioncriteria-authenticatorattachment
export const AuthenticatorAttachment = S.Literal('cross-platform', 'platform');

// https://w3c.github.io/webauthn/#enum-residentKeyRequirement
export const ResidentKeyRequirement = S.Literal(
  'discouraged',
  'preferred',
  'required'
);

// https://w3c.github.io/webauthn/#enumdef-userverificationrequirement
export const UserVerificationRequirement = S.Literal(
  'discouraged',
  'preferred',
  'required'
);

// https://w3c.github.io/webauthn/#enumdef-attestationconveyancepreference
export const AttestationConveyancePreference = S.Literal(
  'direct',
  'enterprise',
  'indirect',
  'none'
);

// https://w3c.github.io/webauthn/#dictdef-publickeycredentialentity
export const PublicKeyCredentialEntity = S.Struct({
  name: S.String,
});

// https://w3c.github.io/webauthn/#dictdef-publickeycredentialparameters
export const PublicKeyCredentialParameters = S.Struct({
  type: S.Literal('public-key'),
  alg: S.Number,
});

// https://w3c.github.io/webauthn/#dictdef-publickeycredentialdescriptor
export const PublicKeyCredentialDescriptor = S.Struct({
  id: S.String,
  type: S.Literal('public-key'),
  transports: S.mutable(S.Array(AuthenticatorTransportFuture)).pipe(S.optional),
});

// https://w3c.github.io/webauthn/#dictdef-authenticatorselectioncriteria
export const AuthenticatorSelectionCriteria = S.Struct({
  authenticatorAttachment: AuthenticatorAttachment.pipe(S.optional),
  requireResidentKey: S.Boolean.pipe(S.optional),
  residentKey: ResidentKeyRequirement.pipe(S.optional),
  userVerification: UserVerificationRequirement.pipe(S.optional),
});

// https://w3c.github.io/webauthn/#dictdef-authenticatorattestationresponsejson
export const AuthenticatorAttestationResponseJSON = S.Struct({
  clientDataJSON: S.String,
  authenticatorData: S.String.pipe(S.optional),
  publicKeyAlgorithm: S.Number.pipe(S.optional),
  attestationObject: S.String,
  transports: S.mutable(S.Array(AuthenticatorTransportFuture)).pipe(S.optional),
  publicKey: S.String.pipe(S.optional),
});

// https://w3c.github.io/webauthn/#dictdef-credentialpropertiesoutput
export const AuthenticationExtensionsClientOutputs = S.Struct({
  appid: S.Boolean.pipe(S.optional),
  credProps: S.Struct({
    rk: S.Boolean.pipe(S.optional),
  }).pipe(S.optional),
  hmacCreateSecret: S.Boolean.pipe(S.optional),
});

// https://w3c.github.io/webauthn/#dictdef-authenticatorassertionresponsejson
export const AuthenticatorAssertionResponseJSON = S.Struct({
  clientDataJSON: S.String,
  authenticatorData: S.String,
  signature: S.String,
  userHandle: S.String.pipe(S.optional),
});
