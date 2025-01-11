import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Plus, Trash } from "lucide-react";

export const AdminPaymentModes = () => {
  const [paymentModes, setPaymentModes] = useState([
    { name: "Bank Transfer", details: "Bank: Example Bank\nAccount: 1234567890" },
  ]);
  const [newMode, setNewMode] = useState({ name: "", details: "" });
  const { toast } = useToast();

  const handleAddMode = () => {
    if (newMode.name && newMode.details) {
      setPaymentModes([...paymentModes, newMode]);
      setNewMode({ name: "", details: "" });
      toast({
        title: "Payment mode added",
        description: "The new payment mode has been added successfully.",
      });
    }
  };

  const handleDeleteMode = (index: number) => {
    setPaymentModes(paymentModes.filter((_, i) => i !== index));
    toast({
      title: "Payment mode removed",
      description: "The payment mode has been removed successfully.",
    });
  };

  return (
    <div className="p-6 rounded-xl bg-plata-card border border-plata-input shadow-plata-xl">
      <h3 className="text-2xl font-bold mb-6 text-white">Manage Payment Modes</h3>
      
      <div className="space-y-6 mb-8">
        {paymentModes.map((mode, index) => (
          <div key={index} className="p-4 bg-plata-input/20 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-white">{mode.name}</h4>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteMode(index)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-plata-light whitespace-pre-line">{mode.details}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Add New Payment Mode</h4>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name
          </label>
          <Input
            id="name"
            value={newMode.name}
            onChange={(e) => setNewMode({ ...newMode, name: e.target.value })}
            className="bg-plata-input/20"
          />
        </div>
        <div>
          <label htmlFor="details" className="block text-sm font-medium text-white mb-2">
            Details
          </label>
          <Textarea
            id="details"
            value={newMode.details}
            onChange={(e) => setNewMode({ ...newMode, details: e.target.value })}
            className="bg-plata-input/20"
            placeholder="Enter account details, instructions, etc."
          />
        </div>
        <Button
          onClick={handleAddMode}
          className="w-full bg-plata-secondary hover:bg-plata-tertiary"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Payment Mode
        </Button>
      </div>
    </div>
  );
};