"use client";
import {Login, AuthProvider} from "@ye/ui/views";
import {authClient} from "@ye/auth/client";
import { useRouter } from "@ye/i18n"
const Page = () => {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/dashboard");
    router.refresh();
  }

  const signInWithEmail = async (email: string, password: string) => {
    await authClient.signIn.email({
      email,
      password
    }, {
      onSuccess
    });
  }

  const signUpWithEmail = async (name: string, email: string, password: string) => {
    await authClient.signUp.email({
      name,
      email,
      password
    }, {
      onSuccess
    });
  }



  return (
    <AuthProvider
      signUpWithEmail={signUpWithEmail}
      signInWithEmail={signInWithEmail}
      signInWithGoogle={async () => {
        await authClient.signIn.social({
          provider: "google"
        }, {
          onSuccess
        });
      }}
      signInWithTwitter={async () => {
        await authClient.signIn.social({
          provider: "twitter"
        }, {
          onSuccess
        });
      }}
      signInWithDiscord={async () => {
        await authClient.signIn.social({
          provider: "discord"
        }, {
          onSuccess
        });
      }}
      signInWithLinkedIn={async () => {
        await authClient.signIn.social({
          provider: "linkedin",
        }, {
          onSuccess
        });
      }}
    >
      <Login/>
    </AuthProvider>
  )
}

export default Page;