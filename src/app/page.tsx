import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Landing Page!</h1>
        <Button className="w-full">Get Started</Button>
      </Card>
    </div>
  );
}
