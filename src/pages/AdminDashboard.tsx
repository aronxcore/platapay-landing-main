import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  CreditCard, 
  AlertCircle,
  Plus,
  Trash2
} from "lucide-react";
import { useState } from "react";

const AdminDashboard = () => {
  const [paymentModes, setPaymentModes] = useState([
    { id: 1, name: "Bank Transfer", details: "Bank: Example Bank\nAccount: 1234567890" },
    { id: 2, name: "Digital Wallet", details: "Wallet ID: wallet@example.com" },
  ]);

  const [pendingRequests] = useState([
    { id: 1, agent: "Agent 1", amount: 500, method: "Bank Transfer", status: "Pending" },
    { id: 2, agent: "Agent 2", amount: 1000, method: "Digital Wallet", status: "Pending" },
  ]);

  const [newPaymentMode, setNewPaymentMode] = useState({ name: "", details: "" });

  const handleAddPaymentMode = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPaymentMode.name && newPaymentMode.details) {
      setPaymentModes([
        ...paymentModes,
        { id: paymentModes.length + 1, ...newPaymentMode }
      ]);
      setNewPaymentMode({ name: "", details: "" });
    }
  };

  const handleDeletePaymentMode = (id: number) => {
    setPaymentModes(paymentModes.filter(mode => mode.id !== id));
  };

  return (
    <div className="min-h-screen bg-plata-dark">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid gap-6">
          {/* Welcome Section */}
          <Card className="p-6 bg-plata-card/20 border-plata-input shadow-plata-xl">
            <div className="flex items-center gap-4">
              <Users className="w-12 h-12 text-plata-light" />
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-plata-light">Manage payment modes and top-up requests</p>
              </div>
            </div>
          </Card>

          {/* Main Content Tabs */}
          <Tabs defaultValue="payment-modes" className="w-full">
            <TabsList className="w-full bg-plata-card/20">
              <TabsTrigger value="payment-modes" className="flex-1">Payment Modes</TabsTrigger>
              <TabsTrigger value="requests" className="flex-1">Top Up Requests</TabsTrigger>
            </TabsList>

            <TabsContent value="payment-modes">
              <Card className="p-6 bg-plata-card/20 border-plata-input shadow-plata-xl">
                <div className="space-y-6">
                  {/* Add New Payment Mode Form */}
                  <form onSubmit={handleAddPaymentMode} className="space-y-4">
                    <div className="flex items-center gap-4">
                      <CreditCard className="text-plata-light" />
                      <h3 className="text-xl font-bold text-white">Add Payment Mode</h3>
                    </div>
                    <div className="grid gap-4">
                      <div>
                        <label className="text-sm text-plata-light">Name</label>
                        <Input
                          value={newPaymentMode.name}
                          onChange={(e) => setNewPaymentMode({
                            ...newPaymentMode,
                            name: e.target.value
                          })}
                          placeholder="e.g., Bank Transfer"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-plata-light">Details</label>
                        <Input
                          value={newPaymentMode.details}
                          onChange={(e) => setNewPaymentMode({
                            ...newPaymentMode,
                            details: e.target.value
                          })}
                          placeholder="Account details, instructions, etc."
                          className="mt-1"
                        />
                      </div>
                      <Button type="submit" className="bg-plata-primary hover:bg-plata-secondary">
                        <Plus className="w-4 h-4 mr-2" /> Add Payment Mode
                      </Button>
                    </div>
                  </form>

                  {/* Existing Payment Modes */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Current Payment Modes</h3>
                    <div className="grid gap-4">
                      {paymentModes.map((mode) => (
                        <div
                          key={mode.id}
                          className="p-4 rounded-lg bg-plata-card/30 flex justify-between items-start"
                        >
                          <div>
                            <h4 className="font-medium text-white">{mode.name}</h4>
                            <p className="text-sm text-plata-light whitespace-pre-line">
                              {mode.details}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeletePaymentMode(mode.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="requests">
              <Card className="p-6 bg-plata-card/20 border-plata-input shadow-plata-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <AlertCircle className="text-plata-light" />
                    <h3 className="text-xl font-bold text-white">Pending Top Up Requests</h3>
                  </div>
                  <div className="space-y-4">
                    {pendingRequests.map((request) => (
                      <div
                        key={request.id}
                        className="p-4 rounded-lg bg-plata-card/30 flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium text-white">{request.agent}</p>
                          <p className="text-sm text-plata-light">
                            Amount: ${request.amount} • {request.method}
                          </p>
                        </div>
                        <div className="space-x-2">
                          <Button variant="default" className="bg-green-500 hover:bg-green-600">
                            Approve
                          </Button>
                          <Button variant="destructive">
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
