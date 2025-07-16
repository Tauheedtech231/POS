'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

type InventoryRecord = {
  product: string;
  sku: string;
  opening: number;
  purchases: number;
  sales: number;
  transferIn: number;
  transferOut: number;
};

const rawData: InventoryRecord[] = [
  { product: 'Organic Apples', sku: 'SKU-001', opening: 100, purchases: 50, sales: 30, transferIn: 20, transferOut: 10 },
  { product: 'Whole Wheat Bread', sku: 'SKU-002', opening: 80, purchases: 40, sales: 25, transferIn: 15, transferOut: 5 },
  { product: 'Free-Range Eggs', sku: 'SKU-003', opening: 120, purchases: 60, sales: 40, transferIn: 30, transferOut: 20 },
  { product: 'Almond Milk', sku: 'SKU-004', opening: 150, purchases: 75, sales: 50, transferIn: 40, transferOut: 25 },
  { product: 'Cheddar Cheese', sku: 'SKU-005', opening: 90, purchases: 45, sales: 30, transferIn: 25, transferOut: 15 },
  { product: 'Ground Beef', sku: 'SKU-006', opening: 110, purchases: 55, sales: 35, transferIn: 30, transferOut: 20 },
  { product: 'Chicken Breast', sku: 'SKU-007', opening: 130, purchases: 65, sales: 45, transferIn: 35, transferOut: 20 },
  { product: 'Salmon Fillets', sku: 'SKU-008', opening: 100, purchases: 50, sales: 30, transferIn: 25, transferOut: 15 },
  { product: 'Spinach', sku: 'SKU-009', opening: 120, purchases: 70, sales: 40, transferIn: 30, transferOut: 5 },
];

export default function InventoryMovementReport() {
  const [filteredData, setFilteredData] = useState(rawData);
  const [branch, setBranch] = useState('');
  const [dateRange, setDateRange] = useState('');

  const applyFilters = () => {
    // 🔧 Add your own filtering logic based on dateRange and branch here
    // Currently just shows all data
    setFilteredData(rawData); // Replace with filtered results if needed
  };

  const resetFilters = () => {
    setBranch('');
    setDateRange('');
    setFilteredData(rawData);
  };

  return (
    <div className="space-y-8 p-6 md:p-10">
      <div>
        <h1 className="text-3xl font-bold">Inventory Movement Report</h1>
        <p className="text-muted-foreground">
          Track changes in stock levels across your branches.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="date"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />

          <Select value={branch} onValueChange={(value) => setBranch(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Main Street">Main Street</SelectItem>
              <SelectItem value="Downtown">Downtown</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <Button onClick={applyFilters}>Apply Filters</Button>
          <Button onClick={resetFilters} variant="outline">
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Inventory Movement Report</h2>
        <div className="overflow-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Opening Stock</TableHead>
                <TableHead>Purchases</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Transfers In</TableHead>
                <TableHead>Transfers Out</TableHead>
                <TableHead>Closing Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6">
                    No data found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredData.map((item, idx) => {
                  const closing =
                    item.opening + item.purchases + item.transferIn - item.sales - item.transferOut;
                  return (
                    <TableRow key={idx}>
                      <TableCell>{item.product}</TableCell>
                      <TableCell className="text-blue-600">{item.sku}</TableCell>
                      <TableCell>{item.opening}</TableCell>
                      <TableCell>{item.purchases}</TableCell>
                      <TableCell>{item.sales}</TableCell>
                      <TableCell>{item.transferIn}</TableCell>
                      <TableCell>{item.transferOut}</TableCell>
                      <TableCell>{closing}</TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
