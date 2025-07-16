"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Download, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InventoryLog {
  id: number;
  dateTime: string;
  user: string;
  type: "In" | "Out";
  quantity: string;
  remarks: string;
}

interface SortConfig {
  key: keyof InventoryLog | null;
  direction: "asc" | "desc";
}

const InventoryLogs: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ 
    key: null, 
    direction: "asc" 
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedUser, setSelectedUser] = useState<string>("all");

  const inventoryData: InventoryLog[] = [
    {
      id: 1,
      dateTime: "2024-03-15 10:30 AM",
      user: "Emily Carter",
      type: "In",
      quantity: "+50",
      remarks: "Received new shipment of t-shirts",
    },
    {
      id: 2,
      dateTime: "2024-03-15 11:15 AM",
      user: "David Lee",
      type: "Out",
      quantity: "-10",
      remarks: "Sold 10 t-shirts",
    },
    {
      id: 3,
      dateTime: "2024-03-15 01:45 PM",
      user: "Emily Carter",
      type: "In",
      quantity: "+20",
      remarks: "Received additional t-shirts",
    },
    {
      id: 4,
      dateTime: "2024-03-15 03:30 PM",
      user: "David Lee",
      type: "Out",
      quantity: "-5",
      remarks: "Sold 5 t-shirts",
    },
    {
      id: 5,
      dateTime: "2024-03-16 09:00 AM",
      user: "Emily Carter",
      type: "In",
      quantity: "+100",
      remarks: "Received large shipment of jeans",
    },
    {
      id: 6,
      dateTime: "2024-03-16 10:45 AM",
      user: "David Lee",
      type: "Out",
      quantity: "-25",
      remarks: "Sold 25 jeans",
    },
    {
      id: 7,
      dateTime: "2024-03-16 12:30 PM",
      user: "Emily Carter",
      type: "In",
      quantity: "+30",
      remarks: "Received additional jeans",
    },
    {
      id: 8,
      dateTime: "2024-03-16 02:15 PM",
      user: "David Lee",
      type: "Out",
      quantity: "-15",
      remarks: "Sold 15 jeans",
    },
    {
      id: 9,
      dateTime: "2024-03-17 11:00 AM",
      user: "Emily Carter",
      type: "In",
      quantity: "+75",
      remarks: "Received shipment of hats",
    },
    {
      id: 10,
      dateTime: "2024-03-17 01:00 PM",
      user: "David Lee",
      type: "Out",
      quantity: "-20",
      remarks: "Sold 20 hats",
    },
  ];

  const requestSort = (key: keyof InventoryLog) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...inventoryData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) => {
    const matchesSearch = 
      item.remarks.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesUser = selectedUser === "all" || item.user === selectedUser;
    
    return matchesSearch && matchesType && matchesUser;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Inventory Logs</h1>
          <p className="text-sm text-muted-foreground">
            Track all inventory adjustments with detailed timestamps and user information
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select 
              value={selectedType} 
              onValueChange={(value: string) => setSelectedType(value)}
            >
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="In">In</SelectItem>
                <SelectItem value="Out">Out</SelectItem>
              </SelectContent>
            </Select>

            <Select 
              value={selectedUser} 
              onValueChange={(value: string) => setSelectedUser(value)}
            >
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="User" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="Emily Carter">Emily Carter</SelectItem>
                <SelectItem value="David Lee">David Lee</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Date Range" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="border-none shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left">
              <tr>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort("dateTime")}
                >
                  <div className="flex items-center gap-1">
                    Date & Time
                    {sortConfig.key === "dateTime" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort("user")}
                >
                  <div className="flex items-center gap-1">
                    User
                    {sortConfig.key === "user" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort("type")}
                >
                  <div className="flex items-center gap-1">
                    Type
                    {sortConfig.key === "type" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th 
                  className="p-4 font-medium cursor-pointer hover:bg-muted/75"
                  onClick={() => requestSort("quantity")}
                >
                  <div className="flex items-center gap-1">
                    Quantity
                    {sortConfig.key === "quantity" && (
                      sortConfig.direction === "asc" ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
                <th className="p-4 font-medium">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted">
              {filteredData.length > 0 ? (
                filteredData.map((log) => (
                  <tr key={log.id} className="hover:bg-muted/50">
                    <td className="p-4 whitespace-nowrap">{log.dateTime}</td>
                    <td className="p-4">{log.user}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        log.type === "In" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                        {log.type}
                      </span>
                    </td>
                    <td className={`p-4 font-medium ${
                      log.type === "In" ? "text-green-600" : "text-red-600"
                    }`}>
                      {log.quantity}
                    </td>
                    <td className="p-4 text-muted-foreground">{log.remarks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">
                    No inventory logs found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredData.length}</span> of{" "}
          <span className="font-medium">{inventoryData.length}</span> entries
        </div>
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InventoryLogs;