"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Mail, Star, History, ChevronDown, ChevronUp, } from "lucide-react";
import Link from "next/link";

interface Customer {
  id: number;
  name: string;
  email: string;
  loyaltyPoints: number;
  purchaseCount: number;
  lastPurchase?: string;
  totalSpent?: number;
}

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Customer; direction: 'asc' | 'desc' }>({
    key: 'name',
    direction: 'asc'
  });

  const customers: Customer[] = [
    { id: 1, name: "Sophia Bennett", email: "sophia.bennett@email.com", loyaltyPoints: 1500, purchaseCount: 5 },
    { id: 2, name: "Liam Carter", email: "liam.carter@gmail.com", loyaltyPoints: 2200, purchaseCount: 12 },
    { id: 3, name: "Olivia Davis", email: "olivia.davis@email.com", loyaltyPoints: 800, purchaseCount: 3 },
    { id: 4, name: "Noah Evans", email: "noah.evans@email.com", loyaltyPoints: 3000, purchaseCount: 20 },
    { id: 5, name: "Ava Foster", email: "ava.foster@email.com", loyaltyPoints: 1200, purchaseCount: 7 },
    { id: 6, name: "Ethan Green", email: "ethan.green@email.com", loyaltyPoints: 1800, purchaseCount: 9 },
    { id: 7, name: "Isabella Harris", email: "isabella.harris@email.com", loyaltyPoints: 2500, purchaseCount: 15 },
    { id: 8, name: "Jackson Ingram", email: "jackson.ingram@email.com", loyaltyPoints: 500, purchaseCount: 2 },
    { id: 9, name: "Mia Jenkins", email: "mia.jenkins@email.com", loyaltyPoints: 2000, purchaseCount: 10 },
    { id: 10, name: "Lucas King", email: "lucas.king@email.com", loyaltyPoints: 1000, purchaseCount: 6 },
  ];

  const requestSort = (key: keyof Customer) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // const sortedCustomers = [...customers].sort((a, b) => {
  //   if(!sortConfig?.key) return 0;
  //   if (a[sortConfig.key] < b[sortConfig.key]) {
  //     return sortConfig.direction === 'asc' ? -1 : 1;
  //   }
  //   if (a[sortConfig.key] > b[sortConfig.key]) {
  //     return sortConfig.direction === 'asc' ? 1 : -1;
  //   }
  //   return 0;
  // });
  const sortedCustomers = [...customers].sort((a, b) =>{
    if(!sortConfig?.key)return 0;
    const key=sortConfig.key as keyof Customer;
    const aValue = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
    const bValue = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];
   if (aValue! > bValue!) {
    return sortConfig.direction === 'asc' ? 1 : -1;
  }
  return 0

  })

  const filteredCustomers = sortedCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLoyaltyTier = (points: number) => {
    if (points >= 2500) return "Platinum";
    if (points >= 1500) return "Gold";
    if (points >= 500) return "Silver";
    return "Bronze";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-muted-foreground">
            Manage your customer relationships and loyalty programs
          </p>
        </div>
       <Link href="/addcustomer"> <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Customer
        </Button></Link>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers by name or email..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left">
              <tr>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort('name')}
                >
                  <div className="flex items-center gap-1">
                    Name
                    {sortConfig.key === 'name' && (
                      sortConfig.direction === 'asc' ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort('email')}
                >
                  <div className="flex items-center gap-1">
                    Contact
                    {sortConfig.key === 'email' && (
                      sortConfig.direction === 'asc' ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort('loyaltyPoints')}
                >
                  <div className="flex items-center gap-1">
                    Loyalty Points
                    {sortConfig.key === 'loyaltyPoints' && (
                      sortConfig.direction === 'asc' ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort('purchaseCount')}
                >
                  <div className="flex items-center gap-1">
                    Purchases
                    {sortConfig.key === 'purchaseCount' && (
                      sortConfig.direction === 'asc' ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th className="p-4 font-medium">Tier</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-muted/50">
                    <td className="p-4 font-medium">{customer.name}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        {customer.email}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {customer.loyaltyPoints.toLocaleString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <History className="h-4 w-4 text-muted-foreground" />
                        {customer.purchaseCount}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getLoyaltyTier(customer.loyaltyPoints) === 'Platinum' ? 'bg-purple-100 text-purple-800' :
                        getLoyaltyTier(customer.loyaltyPoints) === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                        getLoyaltyTier(customer.loyaltyPoints) === 'Silver' ? 'bg-gray-100 text-gray-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {getLoyaltyTier(customer.loyaltyPoints)}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-muted-foreground">
                    No customers found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination would go here */}
    </div>
  );
};

export default CustomersPage;