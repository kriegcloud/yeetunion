"use client";
// import {Login, AuthProvider} from "@ye/ui/views";
// import {authClient} from "@ye/auth/client";
// import { useRouter } from "@ye/i18n";
import { SplashScreen } from "@ye/ui/components";
import React, { useState } from "react";
import { Effect } from "effect";
import { pipe } from "effect/Function";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { reportError, simulateSubmit, FormBody, MuiReactHookFormLive, FormDisplay, TextField, Checkbox, CheckboxButtonGroup } from "@ye/form"

const body = FormBody.struct({
  // autocomplete: Autocomplete.Required,
  textfield: TextField.Required,
  checkboxGroup: CheckboxButtonGroup.Default("react", "svelte", "ng", "vue"),
  checkbox: Checkbox.Default,
});

const Display = pipe(
  FormDisplay.make(body),
  Effect.provide(MuiReactHookFormLive),
  Effect.runSync
)


const Page = () => {
  // const router = useRouter();
  const  [isLoading, _setIsLoading] = useState(false);
  // const onSuccess = () => {
  //   router.push("/dashboard");
  //   router.refresh();
  //   setIsLoading(false)
  // }



  // const signInWithEmail = async (email: string, password: string) => {
  //   setIsLoading(true);
  //   await authClient.signIn.email({
  //     email,
  //     password
  //   }, {
  //     onSuccess
  //   });
  // }
  //
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

  return (
    <Display.Form
      onSubmit={({ encoded }) => simulateSubmit(encoded)}
      onError={reportError}
      validationMode="onSubmit"
    >
      <Stack>
        <Display.textfield label="textfield" />
        <Box>
          <Display.checkbox />
        </Box>
        <Display.checkboxGroup label="checkbox group" options={["react", "svelte", "ng", "vue"] as const} />
        <Stack direction={"row"}>
          <Display.Clear>clear</Display.Clear>
          <Display.Submit>submit</Display.Submit>
        </Stack>
      </Stack>
    </Display.Form>
  )
  // return (
  //   <AuthProvider
  //     signUpWithEmail={signUpWithEmail}
  //     signInWithEmail={signInWithEmail}
  //     signInWithGoogle={async () => {
  //       await authClient.signIn.social({
  //         provider: "google",
  //         callbackURL: "/dashboard",
  //       }, {
  //         onSuccess
  //       });
  //     }}
  //     signInWithTwitter={async () => {
  //       await authClient.signIn.social({
  //         provider: "twitter",
  //         callbackURL: "/dashboard",
  //       }, {
  //         onSuccess
  //       });
  //     }}
  //     signInWithDiscord={async () => {
  //       await authClient.signIn.social({
  //         provider: "discord",
  //         callbackURL: "/dashboard",
  //       }, {
  //         onSuccess
  //       });
  //     }}
  //     signInWithLinkedIn={async () => {
  //       await authClient.signIn.social({
  //         provider: "linkedin",
  //       }, {
  //         onSuccess
  //       });
  //     }}
  //   >
  //     <Login/>
  //   </AuthProvider>
  // )
}

export default Page;