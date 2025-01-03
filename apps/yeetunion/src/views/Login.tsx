"use client";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import type { Mode } from "@ye/theme";
import Illustrations from "@/components/Illustrations";
import Logo from "@/components/Logo";
import { themeConfig } from "@ye/theme/themeConfig";
import { useSettings } from "@ye/theme/ThemeSettingsProvider";
import { useImageVariant } from "@ye/theme/useImageVariant";
import { authClient } from "@ye/auth/client";
const Login = ({ mode }: { mode: Mode }) => {

  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "discord",
    })
  }

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
          <Divider className="gap-3">or</Divider>
          <Button
            color="secondary"
            className="self-center text-textPrimary"
            startIcon={
              <img src="/images/logos/google.png" alt="Google" width={22} />
            }
            sx={{ "& .MuiButton-startIcon": { marginInlineEnd: 3 } }}
            onClick={() => handleSignIn()}
          >
            Sign in with Discord
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
