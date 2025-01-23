import { Metadata } from "next";
// import { auth } from "@ye/auth";
// import { headers } from "next/headers";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "Authorize Application",
  description: "Grant access to your account",
};

interface AuthorizePageProps {
  searchParams: Promise<{
    redirect_uri: string;
    scope: string;
    cancel_uri: string;
    client_id: string;
  }>;
}

export default async function AuthorizePage(_: AuthorizePageProps) {
  // const { scope: _scope, client_id } = await searchParams;
  // const heads = headers();
  // const _session = await auth.api.getSession({
  //   headers: heads,
  // });
  // const _clientDetails = await auth.api.getOAuthClient({
  //   params: {
  //     id: client_id,
  //   },
  //   headers: heads,
  // });

  return (
    <div>beep</div>
  );
}