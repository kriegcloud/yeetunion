"use client";
import React from "react";
import Alert from "@mui/material/Alert";
import {useRouter} from "next/navigation";
import {authClient, signInRequest} from "@ye/auth/client";
import {useEffectForm} from "@ye/utils/hooks";
import {SignupInput} from "@ye/domain/value-objects";
import type {SubmitHandler} from "react-hook-form";
import {Field, Form, FormHead, SubmitButton} from "@ye/ui/components";
import {FormDivider, FormSocials} from "@ye/ui/views";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "@ye/i18n";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import {useState} from "react";

const Page = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const formCtx = useEffectForm({
    schema: SignupInput,
  });

  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    if (data.password !== data.passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }
    await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      callbackURL: "/dashboard",
      fetchOptions: {
        onError: (ctx) => {
          setError(ctx.error.message);
        },
        onSuccess: async () => {
          router.push("/dashboard")
        }
      },
    })
  }

  return (
    <Form formContext={formCtx} onSuccess={onSubmit}>
      <FormHead
        title="Create a new Account"
        description={
          <>
            {`Already have an account? `}
            <Link
              component={RouterLink}
              href={"/sign-in"}
              variant="subtitle2"
            >
              sign-in
            </Link>
          </>
        }
        sx={{textAlign: {xs: "center", md: "left"}}}
      />
      {!!error && (
        <Alert severity="error" sx={{mb: 3}}>
          {error}
        </Alert>
      )}
      <Box sx={{gap: 3, display: "flex", flexDirection: "column"}}>
        <Field.Text
          name={"name"}
          label={"Full Name"} slotProps={{
            inputLabel: {
              shrink: true
            }
        }} />
        <Field.Text type={"email"} name={"email"} label={"Email"} />
        <Field.Password name={"password"} label={"Password"} placeholder={"6+ characters"} />
        <Field.PasswordRepeat name={"passwordConfirmation"} passwordFieldName={"password"} label={"Confirm Password"} />
        <SubmitButton
          fullWidth
          color="inherit"
          size="large"
          variant="contained"
          loadingIndicator="Sign in..."
        >
          Sign in
        </SubmitButton>
      </Box>
      <FormDivider />
      <Stack spacing={2}>
        <FormSocials
          signInWithTwitter={async () => {
            await signInRequest({
              provider: "twitter",
              onError: (message) => setError(message),
            })
          }}
          signInWithLinkedIn={async () => {
            await signInRequest({
              provider: "linkedin",
              onError: (message) => setError(message),
            });
          }}
          signInWithDiscord={async () => {
            await signInRequest({
              provider: "discord",
              onError: (message) => setError(message),
            })
          }}
          signInWithGoogle={async () => {
            await signInRequest({
              provider: "google",
              onError: (message) => setError(message),
            })
          }}
        />
      </Stack>
    </Form>
  )
}

export default Page;