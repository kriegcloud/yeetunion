"use client";
// Next Imports
import Link from "next/link";
import { useParams } from "next/navigation";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
// MUI Imports
import Typography from "@mui/material/Typography";

import type { Mode } from "@ye/theme";
// Third-party Imports
import classnames from "classnames";

// import Illustrations from "@/components/Illustrations";
// Component Imports
import Logo from "@/components/Logo";

import { useSettings } from "@ye/theme/ThemeSettingsProvider";
// Hook Imports
// import { useImageVariant } from "@ye/theme/useImageVariant";

// Util Imports
import { getLocalizedUrl } from "@/utils/i18n";

const RegisterV2 = ({ mode: _ }: { mode: Mode }) => {
  // Vars
  // const darkImg = "/images/pages/auth-v2-mask-dark.png";
  // const lightImg = "/images/pages/auth-v2-mask-light.png";
  // const darkIllustration = "/images/illustrations/auth/v2-register-dark.png";
  // const lightIllustration = "/images/illustrations/auth/v2-register-light.png";
  // const borderedDarkIllustration =
  //   "/images/illustrations/auth/v2-register-dark-border.png";
  // const borderedLightIllustration =
  //   "/images/illustrations/auth/v2-register-light-border.png";

  // Hooks
  const { lang: locale } = useParams();
  // const authBackground = useImageVariant(mode, lightImg, darkImg);
  const { settings } = useSettings();

  // const characterIllustration = useImageVariant(
  //   mode,
  //   lightIllustration,
  //   darkIllustration,
  //   borderedLightIllustration,
  //   borderedDarkIllustration,
  // );

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
        {/*<div className="plb-12 pis-12">*/}
        {/*  <img*/}
        {/*    src={characterIllustration}*/}
        {/*    alt="character-illustration"*/}
        {/*    className="max-bs-[500px] max-is-full bs-auto"*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<Illustrations*/}
        {/*  image1={{ src: "/images/illustrations/objects/tree-3.png" }}*/}
        {/*  image2={null}*/}
        {/*  maskImg={{ src: authBackground }}*/}
        {/*/>*/}
      </div>
      <div className="flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]">
        <Link
          href={getLocalizedUrl("/", (locale as string) ?? "en")}
          className="absolute block-start-5 sm:block-start-[38px] inline-start-6 sm:inline-start-[38px]"
        >
          <Logo />
        </Link>

        <div className="flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]">
          <div>
            <Typography variant="h4">Adventure starts here 🚀</Typography>
            <Typography className="mbe-1">
              Make your app management easy and fun!
            </Typography>
          </div>
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <TextField autoFocus fullWidth label="Username" />
            <div className="flex justify-between items-center gap-3">
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link
                      className="text-primary"
                      href="/"
                      onClick={(e) => e.preventDefault()}
                    >
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
            </div>
            <Button fullWidth variant="contained" type="submit">
              Sign Up
            </Button>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href="/login" color="primary">
                Sign in instead
              </Typography>
            </div>
            <Divider className="gap-3">or</Divider>
            <div className="flex justify-center items-center gap-2">
              <IconButton size="small">
                <i className="ri-facebook-fill text-facebook" />
              </IconButton>
              <IconButton size="small">
                <i className="ri-twitter-fill text-twitter" />
              </IconButton>
              <IconButton size="small">
                <i className="ri-github-fill text-github" />
              </IconButton>
              <IconButton size="small">
                <i className="ri-google-fill text-googlePlus" />
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterV2;
