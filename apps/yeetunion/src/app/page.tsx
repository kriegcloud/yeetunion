/**
 * Home page which is protected by authentication
 * @returns Next.js RSC page.
 */
import { Label } from "@ye/ui/label";
export default async function Home() {
  return (
    <main className="container mx-auto p-6">
      <div className="flex min-h-[37.8px] items-center justify-between">
        <h1>Next.js app</h1>
        <Label>beep</Label>
      </div>
    </main>
  );
}
