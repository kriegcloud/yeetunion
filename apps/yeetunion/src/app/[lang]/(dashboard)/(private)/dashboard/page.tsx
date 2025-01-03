import { HydrateClient } from "@/trpc/server";
import { api } from "@/trpc/server";
const Page = async () => {
  const data = await api.users.getUserById();
  console.log(data);
  return <HydrateClient>beep</HydrateClient>;
};

export default Page;
