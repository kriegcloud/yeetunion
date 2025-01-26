"use client";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {
  Checkbox,
  CheckboxButtonGroup,
  // Autocomplete,
  Code,
  // MobileDatePicker,
  DateFnsProvider,
  // CountrySelect,
  // DatePicker,
  // DateTimePicker,
  Editor,
  FormBody,
  FormDisplay,
  MuiReactHookFormLive,
  MultiSelect,
  // NumberField,
  Password,
  PasswordRepeat,
  // PhoneField,
  // RadioButtonGroup,
  // Rating,
  // Select,
  Slider,
  Switch,
  TextField,
  Textarea,
  reportError,
  simulateSubmit,
  // ToggleButtonGroup,
  // Upload,
} from "@ye/form";
import { SplashScreen } from "@ye/ui/components";
import { Effect } from "effect";
import { pipe } from "effect/Function";
import React, { useState } from "react";

const body = FormBody.struct({
  // autocomplete: Autocomplete.RequiredWithLiterals("react", "svelte", "ng", "vue"),
  checkbox: Checkbox.Default,
  checkboxButtonGroup: CheckboxButtonGroup.Default(
    "react",
    "svelte",
    "ng",
    "vue",
  ),
  code: Code.Required,
  multiSelect: MultiSelect.Default("react", "svelte", "ng", "vue"),
  // numberField: NumberField.Required,
  password: Password.Required,
  passwordRepeat: PasswordRepeat.Required,
  // phoneField: PhoneField.Required,
  // radioButtonGroup: RadioButtonGroup.Default("react", "svelte", "ng", "vue"),
  // rating: Rating.Required,
  // select: Select.Default([
  //   { value: "react", label: "React" },
  //   { value: "svelte", label: "Svelte" },
  //   { value: "ng", label: "Angular" },
  //   { value: "vue", label: "Vue" },
  // ]),
  slider: Slider.Required,
  switch: Switch.Default,
  textarea: Textarea.Required,
  // toggleButtonGroup: ToggleButtonGroup.Default("react", "svelte", "ng", "vue"),
  // upload: Upload.Required,
  textfield: TextField.Required,
  // datePicker: DatePicker.Required,
  // dateTimePicker: DateTimePicker.Required,
  editor: Editor.Required,
  // mobileDatePicker: MobileDatePicker.Required,
});

const Display = pipe(
  FormDisplay.make(body),
  Effect.provide(MuiReactHookFormLive),
  Effect.runSync,
);

const Page = () => {
  // const router = useRouter();
  const [isLoading, _setIsLoading] = useState(false);
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
    <DateFnsProvider>
      <Display.Form
        onSubmit={({ encoded }) => simulateSubmit(encoded)}
        onError={reportError}
        validationMode="onSubmit"
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Display.checkbox label={"checkbox"} />
          </Grid>
          <Grid item xs={12}>
            <Display.checkboxButtonGroup
              label="checkbox group"
              options={["react", "svelte", "ng", "vue"] as const}
            />
          </Grid>
          <Grid item xs={12}>
            <Display.code />
          </Grid>
          <Grid item xs={12}>
            <Display.multiSelect
              options={["react", "svelte", "ng", "vue"] as const}
            />
          </Grid>
          <Grid item xs={12}>
            <Display.password name={"password"} />
          </Grid>
          <Grid item xs={12}>
            <Display.passwordRepeat
              name={"passwordRepeat"}
              passwordFieldName={"password"}
            />
          </Grid>
          <Grid item xs={12}>
            <Display.slider />
          </Grid>
          <Grid item xs={12}>
            <Display.switch label="switch" />
          </Grid>
          <Grid item xs={12}>
            <Display.textarea name={"textarea"} />
          </Grid>
          <Grid item xs={12}>
            <Display.editor />
          </Grid>
          <Display.textfield label="textfield" />
          <Stack direction={"row"}>
            <Display.Clear>clear</Display.Clear>
            <Display.Submit>submit</Display.Submit>
          </Stack>
        </Grid>
      </Display.Form>
    </DateFnsProvider>
  );
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
};

export default Page;
