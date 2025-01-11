import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpCircle, History, Wallet, User } from "lucide-react";
import { useState } from "react";

const AgentDashboard = () => {
  const [balance, setBalance] = useState(1000); // Mock balance
  const [transactions] = useState([
    { id: 1, type: "Top Up", amount: 500, status: "Pending", date: "2024-02-20" },
    { id: 2, type: "Transfer", amount: -200, status: "Completed", date: "2024-02-19" },
  ]);

  return (
    <div className="min-h-screen bg-plata-dark">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid gap-6">
          {/* Welcome Section */}
          <Card className="p-6 bg-plata-card/20 border-plata-input shadow-plata-xl">
            <div className="flex items-center gap-4">
              <User className="w-12 h-12 text-plata-light" />
              <div>
                <h1 className="text-2xl font-bold text-white">Welcome, Agent</h1>
                <p className="text-plata-light">Manage your transactions and balance</p>
              </div>
            </div>
          </Card>

          {/* Balance Card */}
          <Card className="p-6 bg-plata-card/20 border-plata-input shadow-plata-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-plata-light">Current Balance</p>
                <h2 className="text-3xl font-bold text-white">${balance.toFixed(2)}</h2>
              </div>
              <Wallet className="w-12 h-12 text-plata-light" />
            </div>
          </Card>

          {/* Main Content Tabs */}
          <Tabs defaultValue="transactions" className="w-full">
            <TabsList className="w-full bg-plata-card/20">
              <TabsTrigger value="transactions" className="flex-1">Transactions</TabsTrigger>
              <TabsTrigger value="topup" className="flex-1">Top Up</TabsTrigger>
            </TabsList>

            <TabsContent value="transactions">
              <Card className="p-6 bg-plata-card/20 border-plata-input shadow-plata-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
                    <History className="text-plata-light" />
                  </div>
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-plata-card/30"
                      >
                        <div>
                          <p className="font-medium text-white">{transaction.type}</p>
                          <p className="text-sm text-plata-light">{transaction.date}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${
                            transaction.amount > 0 ? "text-green-400" : "text-red-400"
                          }`}>
                            {transaction.amount > 0 ? "+" : ""}{transaction.amount}
                          </p>
                          <p className="text-sm text-plata-light">{transaction.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="topup">
              <Card className="p-6 bg-plata-card/20 border-plata-input shadow-plata-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <ArrowUpCircle className="text-plata-light" />
                    <h3 className="text-xl font-bold text-white">Request Top Up</h3>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm text-plata-light">Amount</label>
                      <Input type="number" placeholder="Enter amount" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-plata-light">Payment Method</label>
                      <select className="w-full mt-1 rounded-md bg-background border-input">
                        <option>Bank Transfer</option>
                        <option>Credit Card</option>
                        <option>Digital Wallet</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-plata-light">Proof of Payment</label>
                      <Input type="file" className="mt-1" />
                    </div>
                    <Button className="w-full bg-plata-primary hover:bg-plata-secondary">
                      Submit Top Up Request
                    </Button>
                  </form>
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

export default AgentDashboard;