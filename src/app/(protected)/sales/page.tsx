"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

const products = [
  {
    name: "Organic Apples",
    sku: "1234567890",
    price: 2.5,
    quantity: 2,
    discount: 0,
    image: "/Pos1.png",
  },
  {
    name: "Whole Wheat Bread",
    sku: "9876543210",
    price: 3.0,
    quantity: 1,
    discount: 0.5,
    image: "/Pos1.png",
  },
  {
    name: "Almond Milk",
    sku: "1122334455",
    price: 3.5,
    quantity: 3,
    discount: 0,
    image: "/Pos1.png",
  },
];

const Sales = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  const subtotal = products.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalDiscount = products.reduce((total, item) => total + item.discount, 0);
  const total = subtotal - totalDiscount;

  return (
    <div className="flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-6 min-h-screen bg-gray-50 dark:bg-black overflow-auto">
      {/* Sidebar */}
      <div className="w-full lg:w-1/3 space-y-4">
        <input
          type="text"
          placeholder="🔍 Scan"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white"
        />
        {products.map((product) => (
          <div
            key={product.sku}
            className="flex items-center gap-3 p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700"
          >
            <img src={product.image} alt={product.name} className="w-10 h-10 rounded" />
            <div>
              <p className="text-sm font-medium text-black dark:text-white">{product.name}</p>
              <p className="text-xs text-blue-500">SKU: {product.sku}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 space-y-6">
        <h1 className="text-2xl font-bold text-black dark:text-white">Sales</h1>

        {/* Cart Table */}
        <div className="overflow-x-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <table className="w-full text-sm text-black dark:text-white min-w-[500px]">
            <thead className="bg-gray-100 dark:bg-gray-800 text-left">
              <tr>
                <th className="p-3">Item</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Price</th>
                <th className="p-3">Discount</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.sku} className="border-t dark:border-gray-700">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.quantity}</td>
                  <td className="p-3">${item.price.toFixed(2)}</td>
                  <td className="p-3">${item.discount.toFixed(2)}</td>
                  <td className="p-3">
                    ${(item.quantity * item.price - item.discount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Customer Selection */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            Customer
          </label>
          <Select onValueChange={(val) => setSelectedCustomer(val)}>
            <SelectTrigger className="w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white">
              <SelectValue placeholder="Select" />
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-md shadow-md z-50">
              <SelectItem value="john" className="px-3 py-2 cursor-pointer">
                John Doe
              </SelectItem>
              <SelectItem value="jane" className="px-3 py-2 cursor-pointer">
                Jane Smith
              </SelectItem>
              <SelectItem value="tauheed" className="px-3 py-2 cursor-pointer">
                Tauheed
              </SelectItem>
            </SelectContent>
          </Select>

          {selectedCustomer && (
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
              Selected Customer: <strong>{selectedCustomer}</strong>
            </p>
          )}
        </div>

        {/* Payment Summary */}
        <div className="text-sm space-y-2 text-black dark:text-white">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Discount</span>
            <span>${totalDiscount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm text-black dark:text-white">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm">
            Pay
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground pt-6 dark:text-gray-500">
          Offline Mode
        </p>
      </div>
    </div>
  );
};

export default Sales;
