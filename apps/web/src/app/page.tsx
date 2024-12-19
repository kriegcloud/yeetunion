/**
 * Home page which is protected by authentication
 * @returns Next.js RSC page.
 */
import { Button } from "@dank/ui/mui/MuiButton";
import { Button as ShadButton } from "@dank/ui/button"
export default async function Home() {
  return (
    <main className="container mx-auto p-6">
      <div className="flex min-h-[37.8px] items-center justify-between">
        <ShadButton>Teet</ShadButton>
        <h1>Next.js app</h1>
        <Button>beep</Button>
      </div>
    </main>
  );
}
