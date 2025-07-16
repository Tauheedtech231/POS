"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example product data with more images
const products = [
  { name: "Organic Apples", price: "$2.99/lb", image: "/Pos1.png" },
  { name: "Whole Wheat Bread", price: "$3.49", image: "/Pos1.png" },
  { name: "Free-Range Eggs", price: "$4.99/dozen", image: "/Pos1.png" },
  { name: "Almond Milk", price: "$3.99", image: "/Pos1.png" },
  { name: "Avocado", price: "$1.50", image: "/Pos1.png" },
  { name: "Cheddar Cheese", price: "$5.99", image: "/Pos1.png" },
  { name: "Orange Juice", price: "$4.49", image: "/Pos1.png" },
  { name: "Tomatoes", price: "$2.20/lb", image: "/Pos1.png" },
  { name: "Chicken Breast", price: "$6.50", image: "/Pos1.png" },
  { name: "Yogurt Pack", price: "$3.75", image: "/Pos1.png" },
];

const Products = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* Left Side */}
      <div className="lg:col-span-2 space-y-6">
        <Input placeholder="🔍 Search products" className="w-full" />

        <div>
          <label className="block text-sm font-medium mb-1">Barcode Scanner</label>
          <Input placeholder="Scan barcode" />
        </div>

        <h2 className="text-xl font-bold">Product Catalog</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {paginatedProducts.map((product) => (
            <Card key={product.name} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <CardContent className="p-3">
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-xs text-muted-foreground">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 mt-4">
          <Button
            size="icon"
            variant="ghost"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {[...Array(totalPages)].map((_, idx) => {
            const pg = idx + 1;
            return (
              <Button
                key={pg}
                variant={page === pg ? "default" : "ghost"}
                size="icon"
                onClick={() => setPage(pg)}
              >
                {pg}
              </Button>
            );
          })}

          <Button
            size="icon"
            variant="ghost"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Cart Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Cart</h2>
        <div className="space-y-3">
          {products.slice(0, 4).map((product) => (
            <div key={product.name} className="flex items-center gap-3">
              <img
                src={product.image}
                className="w-10 h-10 rounded object-cover"
                alt={product.name}
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.price} × 1</p>
              </div>
              <span className="text-sm font-semibold">$3.00</span>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Discount</label>
          <Input placeholder="Enter discount code" />
        </div>

        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold text-base">
            <span>Total</span>
            <span>$15.00</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full bg-blue-500 hover:bg-blue-600">Cash</Button>
          <Button className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200">Card</Button>
          <Button className="w-full bg-blue-500 hover:bg-blue-600">Process Payment</Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
