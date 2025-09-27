import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Welcome to Loci!</h1>
      <Button className="mt-5">Get Started</Button>
    </div>
  );
}
