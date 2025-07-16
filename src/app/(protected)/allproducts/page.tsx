"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {  MoreVertical } from "lucide-react";
import Link from "next/link";
const initialFilters = {
  search: "",
  category: "",
  stockStatus: "",
  supplier: "",
};

const products = [
  {
    name: "Organic Apples",
    sku: "APL-001",
    price: 2.99,
    stock: 15,
    category: "Produce",
    supplier: "FreshFarm",
  },
  {
    name: "Almond Milk",
    sku: "DRK-002",
    price: 3.49,
    stock: 8,
    category: "Dairy",
    supplier: "GreenDairy",
  },
  {
    name: "Wheat Bread",
    sku: "BRD-003",
    price: 2.5,
    stock: 4,
    category: "Bakery",
    supplier: "BakersHub",
  },
];

const ProductsTable = () => {
  const [filters, setFilters] = useState(initialFilters);

  const handleReset = () => setFilters(initialFilters);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesStock =
      filters.stockStatus === "in"
        ? product.stock > 10
        : filters.stockStatus === "low"
        ? product.stock > 0 && product.stock <= 10
        : filters.stockStatus === "out"
        ? product.stock === 0
        : true;
    const matchesSupplier = filters.supplier ? product.supplier === filters.supplier : true;

    return matchesSearch && matchesCategory && matchesStock && matchesSupplier;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/addproducts"><Button >Add Product</Button></Link>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Input
          placeholder="Search by name..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <Select value={filters.category} onValueChange={(val) => setFilters({ ...filters, category: val })}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Produce">Produce</SelectItem>
            <SelectItem value="Dairy">Dairy</SelectItem>
            <SelectItem value="Bakery">Bakery</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filters.stockStatus} onValueChange={(val) => setFilters({ ...filters, stockStatus: val })}>
          <SelectTrigger>
            <SelectValue placeholder="Stock Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in">In Stock</SelectItem>
            <SelectItem value="low">Low Stock</SelectItem>
            <SelectItem value="out">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filters.supplier} onValueChange={(val) => setFilters({ ...filters, supplier: val })}>
          <SelectTrigger>
            <SelectValue placeholder="Supplier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="FreshFarm">FreshFarm</SelectItem>
            <SelectItem value="GreenDairy">GreenDairy</SelectItem>
            <SelectItem value="BakersHub">BakersHub</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={handleReset}>
          Reset Filters
        </Button>
      </div>

      {/* Table */}
      <Card className="overflow-hidden border border-border rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted text-left">
              <tr>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">SKU</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredProducts.map((product) => (
                <tr key={product.sku} className="hover:bg-muted/50">
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">${product.price.toFixed(2)}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4 text-right">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-32 p-2 space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm"
                          onClick={() => alert(`Edit ${product.name}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm text-red-500"
                          onClick={() => alert(`Delete ${product.name}`)}
                        >
                          Delete
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td className="p-4 text-center text-muted-foreground" colSpan={6}>
                    No products match the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProductsTable;
