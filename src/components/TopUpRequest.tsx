import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Upload } from "lucide-react";

export const TopUpRequest = () => {
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual top-up request submission
    toast({
      title: "Top-up request submitted",
      description: "We'll process your request shortly.",
    });
  };

  return (
    <div className="bg-[#422360] p-8 rounded-xl border-2 border-[#7d4e9b] shadow-plata-xl">
      <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Request Top-up</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-[#ffffff] mb-2">
            Amount
          </label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-[#f5f5f5]"
            required
          />
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-[#ffffff] mb-2">
            Notes
          </label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="bg-[#f5f5f5] text-[#0e0e0e] placeholder:text-[#0e0e0e]"
            placeholder="Add any additional information..."
          />
        </div>
        <div>
          <label htmlFor="proof" className="block text-sm font-medium text-[#ffffff] mb-2">
            Proof of Payment
          </label>
            <div className="flex items-center gap-4">
            <Input
              id="proof"
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="bg-[#f5f5f5] text-[#0e0e0e] flex-1"
              accept="image/*,.pdf"
              required
            />
            {file && (
              <Button
              type="button"
              variant="outline"
              onClick={() => setFile(null)}
              className="shrink-0"
              >
              Clear
              </Button>
            )}
            </div>
        </div>
        <Button type="submit" className="w-full font-bold bg-[#7fba59] hover:bg-[#517f3a] text-[#ffffff] mt-8">
          Submit Request
        </Button>
      </form>
    </div>
  );
};