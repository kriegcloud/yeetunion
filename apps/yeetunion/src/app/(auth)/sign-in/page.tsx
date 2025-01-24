"use client";
import {Login, AuthProvider} from "@ye/ui/views";
import {authClient} from "@ye/auth/client";
import { useRouter } from "@ye/i18n";
import { SplashScreen } from "@ye/ui/components";
import React, { useState } from "react";



const Page = () => {
  const router = useRouter();
  const  [isLoading, setIsLoading] = useState(false);
  const onSuccess = () => {
    router.push("/dashboard");
    router.refresh();
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

  const signUpWithEmail = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/dashboard",
    }, {
      onSuccess
    });
  }


  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider
      signUpWithEmail={signUpWithEmail}
      signInWithEmail={signInWithEmail}
      signInWithGoogle={async () => {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: "/dashboard",
        }, {
          onSuccess
        });
      }}
      signInWithTwitter={async () => {
        await authClient.signIn.social({
          provider: "twitter",
          callbackURL: "/dashboard",
        }, {
          onSuccess
        });
      }}
      signInWithDiscord={async () => {
        await authClient.signIn.social({
          provider: "discord",
          callbackURL: "/dashboard",
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
      {/*<SplashScreen />*/}
      <Login/>
    </AuthProvider>
  )
}

export default Page;