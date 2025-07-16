'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

type StaffData = {
  name: string;
  branch: string;
  date: string;
  sales: string;
  averageOrder: string;
  orders: number;
  customers: number;
  refunds: number;
};

// Sample Data
const staffRecords: StaffData[] = [
  { name: 'Sophia Clark', branch: 'Downtown', date: '2024-07-01', sales: '$12,500', averageOrder: '$125', orders: 100, customers: 80, refunds: 5 },
  { name: 'Ethan Miller', branch: 'Uptown', date: '2024-07-03', sales: '$15,000', averageOrder: '$150', orders: 100, customers: 100, refunds: 3 },
  { name: 'Olivia Davis', branch: 'Midtown', date: '2024-06-30', sales: '$10,000', averageOrder: '$100', orders: 100, customers: 70, refunds: 7 },
  { name: 'Noah Wilson', branch: 'Downtown', date: '2024-07-02', sales: '$11,000', averageOrder: '$110', orders: 100, customers: 75, refunds: 6 },
  { name: 'Ava Taylor', branch: 'Uptown', date: '2024-06-29', sales: '$13,500', averageOrder: '$135', orders: 100, customers: 90, refunds: 4 },
];

export default function StaffPerformance() {
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedDateRange, setSelectedDateRange] = useState<string>('');

  // Filter logic
  const filtered = staffRecords.filter((staff) => {
    const matchBranch = !selectedBranch || staff.branch === selectedBranch;
    const matchDateRange =
      !selectedDateRange ||
      (selectedDateRange === 'last-7-days' && new Date(staff.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
      (selectedDateRange === 'this-month' && new Date(staff.date).getMonth() === new Date().getMonth());
    return matchBranch && matchDateRange;
  });

  const handleReset = () => {
    setSelectedBranch('');
    setSelectedDateRange('');
  };

  return (
    <div className="space-y-8 p-6 md:p-10">
      <div>
        <h1 className="text-3xl font-bold">Staff Performance</h1>
        <p className="text-muted-foreground">
          Analyze staff performance across different branches and time periods.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-7-days">Last 7 Days</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedBranch} onValueChange={setSelectedBranch}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Downtown">Downtown</SelectItem>
            <SelectItem value="Uptown">Uptown</SelectItem>
            <SelectItem value="Midtown">Midtown</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={handleReset}>
          Clear Filters
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Staff</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Average Order Value</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Customers</TableHead>
              <TableHead>Refunds</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((staff, index) => (
              <TableRow key={index}>
                <TableCell>{staff.name}</TableCell>
                <TableCell className="text-blue-600">{staff.branch}</TableCell>
                <TableCell>{staff.sales}</TableCell>
                <TableCell>{staff.averageOrder}</TableCell>
                <TableCell>{staff.orders}</TableCell>
                <TableCell>{staff.customers}</TableCell>
                <TableCell>{staff.refunds}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
