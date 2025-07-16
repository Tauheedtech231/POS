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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud, Plus, Trash2 } from "lucide-react";

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    sku: "",
    price: "",
    description: "",
    category: "",
    supplier: "",
    images: [] as File[],
  });

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const inventoryHistory = [
    { date: "2024-01-15", action: "Added", quantity: 100, user: "Emily Carter" },
    { date: "2024-01-20", action: "Sold", quantity: -20, user: "System" },
    { date: "2024-02-05", action: "Adjusted", quantity: 10, user: "Emily Carter" },
    { date: "2024-02-10", action: "Sold", quantity: -30, user: "System" },
    { date: "2024-03-01", action: "Received", quantity: 50, user: "Emily Carter" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setProduct({ ...product, images: [...product.images, ...files] });
      
      const previews = files.map(file => URL.createObjectURL(file));
      setPreviewImages([...previewImages, ...previews]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...product.images];
    newImages.splice(index, 1);
    setProduct({ ...product, images: newImages });

    const newPreviews = [...previewImages];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(product);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Save Product
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Product Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input 
                  placeholder="Enter product name" 
                  value={product.name}
                  onChange={(e) => setProduct({...product, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">SKU</label>
                  <Input 
                    placeholder="Enter SKU" 
                    value={product.sku}
                    onChange={(e) => setProduct({...product, sku: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price</label>
                  <Input 
                    placeholder="Enter price" 
                    type="number"
                    value={product.price}
                    onChange={(e) => setProduct({...product, price: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Input 
                  placeholder="Enter product description" 
                  value={product.description}
                  onChange={(e) => setProduct({...product, description: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select 
                    value={product.category} 
                    onValueChange={(value) => setProduct({...product, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="produce">Produce</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                      <SelectItem value="bakery">Bakery</SelectItem>
                      <SelectItem value="meat">Meat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Supplier</label>
                  <Select 
                    value={product.supplier} 
                    onValueChange={(value) => setProduct({...product, supplier: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freshfarm">FreshFarm</SelectItem>
                      <SelectItem value="greendairy">GreenDairy</SelectItem>
                      <SelectItem value="bakershub">BakersHub</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloud className="w-8 h-8 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG (MAX. 5MB each)
                  </p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  multiple 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>

              {/* Image Previews */}
              {previewImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {previewImages.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="rounded-md h-24 w-full object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/80 hover:bg-red-500 text-white"
                        onClick={() => removeImage(index)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Inventory History */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Inventory History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="p-3 font-medium">Date</th>
                      <th className="p-3 font-medium">Action</th>
                      <th className="p-3 font-medium">Quantity</th>
                      <th className="p-3 font-medium">User</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    {inventoryHistory.map((record, index) => (
                      <tr key={index}>
                        <td className="p-3">{record.date}</td>
                        <td className="p-3">{record.action}</td>
                        <td className={`p-3 font-medium ${
                          record.quantity > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {record.quantity > 0 ? `+${record.quantity}` : record.quantity}
                        </td>
                        <td className="p-3">{record.user}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;