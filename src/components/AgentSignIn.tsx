import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export const AgentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication logic
    toast({
      title: "Sign in successful",
      description: "Welcome back!",
    });
  };

  return (
    <div className="bg-[#422360] p-8 rounded-xl border-2 border-[#7d4e9b] shadow-plata-xl">
      <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Agent Sign In</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#f5f5f5] mb-4">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#f5f5f5]"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#f5f5f5] mb-4">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#f5f5f5]"
            required
          />
        </div>
        <Button type="submit" className="w-full font-bold bg-[#7fba59] hover:bg-[#517f3a] text-[#ffffff] mt-8">
          Sign In
        </Button>
      </form>
    </div>
  );
};