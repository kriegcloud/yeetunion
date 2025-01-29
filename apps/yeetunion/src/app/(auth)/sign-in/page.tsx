"use client";
import React from "react";
import Alert from "@mui/material/Alert";
import {useRouter} from "next/navigation";
import {signInRequest} from "@ye/auth/client";
import {useEffectForm} from "@ye/utils/hooks";
import {SigninInput} from "@ye/domain/value-objects";
import type {SubmitHandler} from "react-hook-form";
import {Field, Form, FormHead, SubmitButton} from "@ye/ui/components";
import {FormDivider, FormSocials} from "@ye/ui/views";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "@ye/i18n";
import Box from "@mui/material/Box";
import {Button, Stack} from "@mui/material";
import {useState} from "react";


const Page = () => {
  const router = useRouter();
  const formCtx = useEffectForm({
    schema: SigninInput,
    defaultValues: {
      rememberMe: false,
    }
  })
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SigninInput> = async (data) =>
    signInRequest({
      provider: "credentials",
      payload: data,
      onError: (message) => setError(message),
    });

  return (
    <Form formContext={formCtx} onSuccess={onSubmit}>
      <FormHead
        title="Sign in to your account"
        description={
          <>
            {`Don’t have an account? `}
            <Link
              component={RouterLink}
              href={"/sign-up"}
              variant="subtitle2"
            >
              Get started
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
          name="email"
          label="Email address"
          slotProps={{inputLabel: {shrink: true}}}
        />
        <Box sx={{gap: 1.5, display: "flex", flexDirection: "column"}}>
          <Link
            component={RouterLink}
            href="#"
            variant="body2"
            color="inherit"
            sx={{alignSelf: "flex-end"}}
          >
            Forgot password?
          </Link>
          <Field.Password
            name="password"
            label="Password"
            placeholder="6+ characters"
          />
          <Field.Checkbox label={"Remember me"} name="rememberMe"/>
        </Box>
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
      <FormDivider/>
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
        <Button fullWidth={true} variant={"contained"} onClick={async () => {
          await signInRequest({
            provider: "passkey",
            onError: (message) => setError(message),
            onSuccess: () => {
              router.push("/dashboard")
            }
          })
        }}>
          Sign-in with Passkey
        </Button>
      </Stack>
    </Form>
  );

};

export default Page;
