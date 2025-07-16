"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin,  ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Purchase {
  date: string;
  orderId: string;
  items: number;
  total: number;
  status: "Completed" | "Pending" | "Cancelled";
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string[];
  loyaltyTier: "Gold" | "Silver" | "Platinum";
  totalPurchases: number;
  totalSpend: number;
  purchases: Purchase[];
  notes: string;
}

const PurchaseHistoryPage = () => {
  const customer: Customer = {
    id: "1234567890",
    name: "Sophia Clark",
    email: "sophia.clark@sophia22m4567",
    phone: "+1 (555) 123-4567",
    address: ["123 Maple Street", "Anytown, USA"],
    loyaltyTier: "Gold",
    totalPurchases: 12,
    totalSpend: 1250,
    purchases: [
      {
        date: "2024-07-20",
        orderId: "ORD-20240720-001",
        items: 3,
        total: 150.00,
        status: "Completed"
      },
      {
        date: "2024-06-15",
        orderId: "ORD-20240615-002",
        items: 2,
        total: 80.00,
        status: "Completed"
      },
      {
        date: "2024-05-10",
        orderId: "ORD-20240510-003",
        items: 4,
        total: 220.00,
        status: "Completed"
      },
      {
        date: "2024-04-05",
        orderId: "ORD-20240405-004",
        items: 1,
        total: 50.00,
        status: "Completed"
      },
      {
        date: "2024-03-01",
        orderId: "ORD-20240301-005",
        items: 3,
        total: 100.00,
        status: "Completed"
      }
    ],
    notes: "Sophia is a frequent customer and prefers to shop during sales events. She is interested in new arrivals."
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Gold": return "bg-yellow-100 text-yellow-800";
      case "Silver": return "bg-gray-100 text-gray-800";
      case "Platinum": return "bg-purple-100 text-purple-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/customers">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Purchase History</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Info Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{customer.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {customer.id}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${customer.email}`} className="text-sm hover:underline">
                    {customer.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${customer.phone.replace(/\D/g, '')}`} className="text-sm hover:underline">
                    {customer.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div>
                  <p className="text-sm text-muted-foreground">Past Purchases</p>
                  <p className="font-medium">{customer.totalPurchases}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Spend</p>
                  <p className="font-medium">${customer.totalSpend.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Loyalty Tier</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(customer.loyaltyTier)}`}>
                    {customer.loyaltyTier}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="text-sm">
                  {customer.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{customer.notes}</p>
            </CardContent>
          </Card>
        </div>

        {/* Purchase History Column */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="p-3 font-medium">Date</th>
                      <th className="p-3 font-medium">Order ID</th>
                      <th className="p-3 font-medium">Items</th>
                      <th className="p-3 font-medium">Total</th>
                      <th className="p-3 font-medium">Status</th>
                      <th className="p-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    {customer.purchases.map((purchase) => (
                      <tr key={purchase.orderId} className="hover:bg-muted/50">
                        <td className="p-3 whitespace-nowrap">{purchase.date}</td>
                        <td className="p-3">{purchase.orderId}</td>
                        <td className="p-3">{purchase.items}</td>
                        <td className="p-3">${purchase.total.toFixed(2)}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                            {purchase.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryPage;