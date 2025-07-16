'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

type SaleRecord = {
  date: string;
  branch: string;
  paymentMethod: string;
  totalSales: string;
  itemsSold: number;
  avgOrderValue: string;
};

const dummyData: SaleRecord[] = [
  {
    date: '2024-01-15',
    branch: 'Main Street',
    paymentMethod: 'Credit Card',
    totalSales: '$5,200',
    itemsSold: 150,
    avgOrderValue: '$34.67',
  },
  {
    date: '2024-01-15',
    branch: 'Downtown',
    paymentMethod: 'Cash',
    totalSales: '$3,800',
    itemsSold: 120,
    avgOrderValue: '$31.67',
  },
  {
    date: '2024-01-16',
    branch: 'Main Street',
    paymentMethod: 'Credit Card',
    totalSales: '$4,500',
    itemsSold: 130,
    avgOrderValue: '$34.62',
  },
  {
    date: '2024-01-16',
    branch: 'Downtown',
    paymentMethod: 'Cash',
    totalSales: '$3,200',
    itemsSold: 100,
    avgOrderValue: '$32.00',
  },
  {
    date: '2024-01-17',
    branch: 'Main Street',
    paymentMethod: 'Credit Card',
    totalSales: '$5,500',
    itemsSold: 160,
    avgOrderValue: '$34.38',
  },
];

export default function SalesReport() {
  const [filteredData, setFilteredData] = useState(dummyData);

  const [dateFilter, setDateFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('');

  const applyFilters = () => {
    const filtered = dummyData.filter((record) => {
      const dateMatch = !dateFilter || record.date === dateFilter;
      const branchMatch = !branchFilter || record.branch === branchFilter;
      const paymentMatch =
        !paymentFilter || record.paymentMethod === paymentFilter;

      return dateMatch && branchMatch && paymentMatch;
    });

    setFilteredData(filtered);
  };

  const clearFilters = () => {
    setDateFilter('');
    setBranchFilter('');
    setPaymentFilter('');
    setFilteredData(dummyData);
  };

  return (
    <div className="space-y-8 p-6 md:p-10">
      <div>
        <h1 className="text-3xl font-bold">Sales Report</h1>
        <p className="text-muted-foreground">
          Analyze sales data across different branches and payment methods.
        </p>
      </div>

      {/* Filters Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />

          <Select
            value={branchFilter}
            onValueChange={(value) => setBranchFilter(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Main Street">Main Street</SelectItem>
              <SelectItem value="Downtown">Downtown</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={paymentFilter}
            onValueChange={(value) => setPaymentFilter(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Payment Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cash">Cash</SelectItem>
              <SelectItem value="Credit Card">Credit Card</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <Button onClick={applyFilters}>Apply Filters</Button>
          <Button onClick={clearFilters} variant="outline">
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Report Table */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Sales Report</h2>
        <div className="overflow-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Total Sales</TableHead>
                <TableHead>Items Sold</TableHead>
                <TableHead>Average Order Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6">
                    No records found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredData.map((sale, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{sale.date}</TableCell>
                    <TableCell>{sale.branch}</TableCell>
                    <TableCell>{sale.paymentMethod}</TableCell>
                    <TableCell>{sale.totalSales}</TableCell>
                    <TableCell>{sale.itemsSold}</TableCell>
                    <TableCell>{sale.avgOrderValue}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
