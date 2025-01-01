"use client";

// React Imports
import { useState } from "react";

// Next Imports
import Link from "next/link";
// import { useParams, useRouter, useSearchParams } from 'next/navigation'

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
// MUI Imports
import Typography from "@mui/material/Typography";

// Third-party Imports
// import { signIn } from 'next-auth/react'
// import { Controller, useForm } from 'react-hook-form'
// import { valibotResolver } from '@hookform/resolvers/valibot'
// import { object, minLength, string, email, pipe, nonEmpty } from 'valibot'
import classnames from "classnames";
// import type { SubmitHandler } from 'react-hook-form'
// import type { InferInput } from 'valibot'

// Type Imports
import type { Mode } from "@ye/theme";
// import type { Locale } from '@/configs/i18n'

import Illustrations from "@/components/Illustrations";
// Component Imports
import Logo from "@/components/Logo";

// Config Imports
import { themeConfig } from "@ye/theme/themeConfig";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";
// Hook Imports
import { useImageVariant } from "@ye/theme/useImageVariant";

// // Util Imports
// import { getLocalizedUrl } from '@/utils/i18n'
//
// type ErrorType = {
//   message: string[]
// }

const Login = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, _setIsPasswordShown] = useState(false);
  // const [errorState, setErrorState] = useState<ErrorType | null>(null)

  // Vars
  const darkImg = "/images/pages/auth-v2-mask-dark.png";
  const lightImg = "/images/pages/auth-v2-mask-light.png";
  const darkIllustration = "/images/illustrations/auth/v2-login-dark.png";
  const lightIllustration = "/images/illustrations/auth/v2-login-light.png";
  const borderedDarkIllustration =
    "/images/illustrations/auth/v2-login-dark-border.png";
  const borderedLightIllustration =
    "/images/illustrations/auth/v2-login-light-border.png";

  // Hooks
  // const router = useRouter()
  // const searchParams = useSearchParams()
  // const { lang: locale } = useParams()
  const { settings } = useSettings();

  const authBackground = useImageVariant(mode, lightImg, darkImg);

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration,
  );

  return (
    <div className="flex bs-full justify-center">
      <div
        className={classnames(
          "flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden",
          {
            "border-ie": settings.skin === "bordered",
          },
        )}
      >
        <div className="plb-12 pis-12">
          <img
            src={characterIllustration}
            alt="character-illustration"
            className="max-bs-[500px] max-is-full bs-auto"
          />
        </div>
        <Illustrations
          image1={{ src: "/images/illustrations/objects/tree-2.png" }}
          image2={null}
          maskImg={{ src: authBackground }}
        />
      </div>
      <div className="flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]">
        <div className="absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]">
          <Logo />
        </div>
        <div className="flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]">
          <div>
            <Typography variant="h4">{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography>
            <Typography>
              Please sign-in to your account and start the adventure
            </Typography>
          </div>
          <Alert icon={false} className="bg-primaryLight">
            <Typography variant="body2" color="primary">
              Email: <span className="font-medium">admin@materio.com</span> /
              Pass: <span className="font-medium">admin</span>
            </Typography>
          </Alert>

          <form
            noValidate
            action={() => {}}
            autoComplete="off"
            onSubmit={() => console.log("beep")}
            className="flex flex-col gap-5"
          >
            <TextField fullWidth autoFocus type="email" label="Email" />
            <TextField
              fullWidth
              label="Password"
              id="login-password"
              type={isPasswordShown ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      edge="end"
                      onMouseDown={(e) => e.preventDefault()}
                      aria-label="toggle password visibility"
                    >
                      <i
                        className={
                          isPasswordShown ? "ri-eye-off-line" : "ri-eye-line"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="flex justify-between items-center flex-wrap gap-x-3 gap-y-1">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <Typography
                className="text-end"
                color="primary"
                component={Link}
                href="/forgot-password"
              >
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant="contained" type="submit">
              Log In
            </Button>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <Typography>New on our platform?</Typography>
              <Typography component={Link} href="/register" color="primary">
                Create an account
              </Typography>
            </div>
          </form>
          <Divider className="gap-3">or</Divider>
          <Button
            color="secondary"
            className="self-center text-textPrimary"
            startIcon={
              <img src="/images/logos/google.png" alt="Google" width={22} />
            }
            sx={{ "& .MuiButton-startIcon": { marginInlineEnd: 3 } }}
            onClick={() => console.log("beep")}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
