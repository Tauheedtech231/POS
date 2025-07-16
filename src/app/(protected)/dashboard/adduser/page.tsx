// app/dashboard/users/add/page.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AddUserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    permissions: {
      products: { read: false, write: false, delete: false },
      customers: { read: false, write: false, delete: false },
      sales: { viewOnly: false }
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (section: string, permission: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [section]: {
          ...prev.permissions[section as keyof typeof prev.permissions],
          [permission]: value
        }
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New User</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Role Management */}
              <div className="space-y-2 md:col-span-2">
                <Label>Role Management</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="cashier">Cashier</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Permissions Section */}
            <div className="space-y-4">
              <h3 className="font-medium">Permissions</h3>
              
              {/* Products Permissions */}
              <div className="rounded-lg border p-4">
                <h4 className="font-medium mb-3">Products</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="products-read"
                      checked={formData.permissions.products.read}
                      onCheckedChange={(checked) => 
                        handlePermissionChange('products', 'read', checked as boolean)
                      }
                    />
                    <Label htmlFor="products-read">Read</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="products-write"
                      checked={formData.permissions.products.write}
                      onCheckedChange={(checked) => 
                        handlePermissionChange('products', 'write', checked as boolean)
                      }
                    />
                    <Label htmlFor="products-write">Write</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="products-delete"
                      checked={formData.permissions.products.delete}
                      onCheckedChange={(checked) => 
                        handlePermissionChange('products', 'delete', checked as boolean)
                      }
                    />
                    <Label htmlFor="products-delete">Delete</Label>
                  </div>
                </div>
              </div>

              {/* Customers Permissions */}
              <div className="rounded-lg border p-4">
                <h4 className="font-medium mb-3">Customers</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customers-read"
                      checked={formData.permissions.customers.read}
                      onCheckedChange={(checked) => 
                        handlePermissionChange('customers', 'read', checked as boolean)
                      }
                    />
                    <Label htmlFor="customers-read">Read</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customers-write"
                      checked={formData.permissions.customers.write}
                      onCheckedChange={(checked) => 
                        handlePermissionChange('customers', 'write', checked as boolean)
                      }
                    />
                    <Label htmlFor="customers-write">Write</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customers-delete"
                      checked={formData.permissions.customers.delete}
                      onCheckedChange={(checked) => 
                        handlePermissionChange('customers', 'delete', checked as boolean)
                      }
                    />
                    <Label htmlFor="customers-delete">Delete</Label>
                  </div>
                </div>
              </div>

              {/* Sales Permissions */}
              <div className="rounded-lg border p-4">
                <h4 className="font-medium mb-3">Sales</h4>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sales-view"
                    checked={formData.permissions.sales.viewOnly}
                    onCheckedChange={(checked) => 
                      handlePermissionChange('sales', 'viewOnly', checked as boolean)
                    }
                  />
                  <Label htmlFor="sales-view">View only</Label>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                Create User
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}