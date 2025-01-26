"use client";
import { SplashScreen } from "@ye/ui/components";
import React, { useState } from "react";

import { useRouter } from "@ye/i18n";
import { authClient } from "@ye/auth/client";
import {useEffectForm} from "@ye/utils/hooks";
import {SigninInput} from "@ye/value-objects";
import type {SubmitHandler} from "react-hook-form";
import {Field, Form, FormHead, SubmitButton} from "@ye/ui/components";
import { FormDivider, FormSocials } from "@ye/ui/views";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "@ye/i18n";
import Box from "@mui/material/Box";
import {Button, Stack} from "@mui/material";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSuccess = () => {
    router.push("/dashboard");
    setIsLoading(false)
  }

  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true);
    await authClient.signIn.email({
      email,
      password
    }, {
      onSuccess
    });
  }

  // const signUpWithEmail = async (name: string, email: string, password: string) => {
  //   setIsLoading(true);
  //   await authClient.signUp.email({
  //     name,
  //     email,
  //     password,
  //     callbackURL: "/dashboard",
  //   }, {
  //     onSuccess
  //   });
  // }

  if (isLoading) {
    return <SplashScreen />;
  }


  const router = useRouter();

  const methods = useEffectForm({
    schema: SigninInput,
  })

  const onSubmit: SubmitHandler<SigninInput> = async (data) => {
    try {
      await signInWithEmail(data.email, data.password);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form formContext={methods} onSuccess={onSubmit}>
      <FormHead
        title="Sign in to your account"
        description={
          <>
            {`Don’t have an account? `}
            <Link
              component={RouterLink}
              href={"/auth/signup"}
              variant="subtitle2"
            >
              Get started
            </Link>
          </>
        }
        sx={{textAlign: {xs: "center", md: "left"}}}
      />
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
      <FormDivider />
      <Stack spacing={2}>
        <FormSocials
          signInWithTwitter={async () => {
            await authClient.signIn.social({
              provider: "twitter",
              callbackURL: "/dashboard",
            });
          }}
          signInWithLinkedIn={async () => {
            await authClient.signIn.social({
              provider: "linkedin",
              callbackURL: "/dashboard",
            });
          }}
          signInWithDiscord={async () => {
            await authClient.signIn.social({
              provider: "discord",
              callbackURL: "/dashboard",
            });
          }}
          signInWithGoogle={async () => {
            await authClient.signIn.social({
              provider: "google",
              callbackURL: "/dashboard",
            });
          }}
        />
        <Button fullWidth={true} variant={"contained"} onClick={async () => {
          await authClient.signIn.passkey({
            fetchOptions: {
              onSuccess() {
                router.push("/dashboard");
              },
              onError(context) {
                console.error(context.error.message)
              },
            },
          });
        }}>
          Sign-in with Passkey
        </Button>
      </Stack>
    </Form>
  );

};

export default Page;
