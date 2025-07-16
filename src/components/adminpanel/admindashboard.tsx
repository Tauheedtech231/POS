
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icon";
import Link from "next/link";

const dailyData = [
  { name: "Mon", value: 100, returns: 12 },
  { name: "Tue", value: 120, returns: 8 },
  { name: "Wed", value: 90, returns: 15 },
  { name: "Thu", value: 150, returns: 5 },
  { name: "Fri", value: 80, returns: 10 },
  { name: "Sat", value: 130, returns: 7 },
  { name: "Sun", value: 110, returns: 9 },
];

const weeklyData = [
  { name: "Week 1", sales: 700, orders: 45 },
  { name: "Week 2", sales: 800, orders: 52 },
  { name: "Week 3", sales: 750, orders: 48 },
  { name: "Week 4", sales: 900, orders: 60 },
];

const monthlyData = [
  { name: "Jan", sales: 3200, expenses: 2200 },
  { name: "Feb", sales: 2800, expenses: 2000 },
  { name: "Mar", sales: 3000, expenses: 2100 },
  { name: "Apr", sales: 3500, expenses: 2300 },
];

const productData = [
  { name: "Organic Apples", category: "Produce", sold: 150, revenue: 300, stock: 15 },
  { name: "Almond Milk", category: "Dairy", sold: 120, revenue: 480, stock: 8 },
  { name: "Whole Wheat Bread", category: "Bakery", sold: 95, revenue: 190, stock: 3 },
  { name: "Free Range Eggs", category: "Dairy", sold: 80, revenue: 160, stock: 22 },
  { name: "Avocados", category: "Produce", sold: 65, revenue: 195, stock: 5 },
];

const categoryData = [
  { name: "Produce", value: 35 },
  { name: "Dairy", value: 25 },
  { name: "Bakery", value: 20 },
  { name: "Meat", value: 15 },
  { name: "Other", value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">
            Overview of your business performance
          </p>
        </div>

        <div className="flex flex-row gap-3 overflow-x-auto w-full md:w-auto pb-2">
          <div className="bg-background border border-border rounded-lg p-4 min-w-[200px]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <p className="font-medium text-sm">Out of Stock</p>
            </div>
            <p className="text-lg font-semibold mt-1">10</p>
            <p className="text-xs text-muted-foreground">items</p>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-4 min-w-[200px]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <p className="font-medium text-sm">Sync Failed</p>
            </div>
            <p className="text-lg font-semibold mt-1">10:00 AM</p>
            <p className="text-xs text-muted-foreground">last attempt</p>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-4 min-w-[200px]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <p className="font-medium text-sm">Low Stock</p>
            </div>
            <p className="text-lg font-semibold mt-1">5</p>
            <p className="text-xs text-muted-foreground">items</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Sales", value: "$250,000", change: "+12%", icon: "dollar" },
          { title: "Today's Revenue", value: "$1,500", change: "+5%", icon: "activity" },
          { title: "Active Users", value: "12", change: "+2", icon: "users" },
          { title: "Conversion Rate", value: "3.2%", change: "+0.4%", icon: "trendingUp" },
        ].map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-4 flex flex-col">
              <div className="flex justify-between items-start">
                <p className="text-muted-foreground text-sm">{stat.title}</p>
                <div className="p-2 rounded-lg bg-primary/10">
  {
    (() => {
      const Icon = Icons[stat.icon as keyof typeof Icons];
      return <Icon className="w-4 h-4 text-primary" />;
    })()
  }
</div>

              </div>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <Badge variant="secondary" className="mt-2 w-fit">
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alerts Section */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-yellow-100">
        <Icons.alertTriangle className="w-5 h-5 text-yellow-600" />
      </div>
      <div>
        <p className="font-semibold">Low Stock Alert</p>
        <p className="text-sm text-yellow-700">
          5 products are below the reorder threshold. Consider restocking soon.
        </p>
      </div>
    </div>
    <Link href="/allproducts">
      <Button
        variant="outline"
        size="sm"
        className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
      >
        View Products
      </Button>
    </Link>
  </div>
</div>


      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="weekly">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <h2 className="text-lg font-semibold">Sales Overview</h2>
              <TabsList className="bg-muted p-1 rounded-lg">
                {["daily", "weekly", "monthly"].map((type) => (
                  <TabsTrigger
                    key={type}
                    value={type}
                    className="rounded-md px-4 py-2 text-sm font-medium transition-colors data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary/10"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="daily">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Sales</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium text-sm flex items-center">
                      <Icons.arrowUp className="w-4 h-4 mr-1" /> +15%
                    </span>
                    <span className="text-muted-foreground text-sm">vs last week</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={dailyData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          dataKey="value"
                          name="Sales"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          dataKey="returns"
                          name="Returns"
                          stroke="#ef4444"
                          strokeWidth={2}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weekly">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Performance</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium text-sm flex items-center">
                      <Icons.arrowUp className="w-4 h-4 mr-1" /> +8%
                    </span>
                    <span className="text-muted-foreground text-sm">vs last month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" name="Sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="orders" name="Orders" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Trends</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium text-sm flex items-center">
                      <Icons.arrowUp className="w-4 h-4 mr-1" /> +12%
                    </span>
                    <span className="text-muted-foreground text-sm">vs last quarter</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          dataKey="sales"
                          name="Sales"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          dataKey="expenses"
                          name="Expenses"
                          stroke="#f59e0b"
                          strokeWidth={2}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Category Breakdown */}
        <Card>
  <CardHeader>
    <CardTitle>Sales by Category</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="h-[200px] sm:h-[300px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="70%"
            fill="#8884d8"
            dataKey="value"
           
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* Responsive Legend */}
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-2">
      {categoryData.map((category, index) => (
        <div key={category.name} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          ></div>
          <span className="text-sm truncate">{category.name}</span>
          <span className="text-sm font-medium ml-auto">{category.value}%</span>
        </div>
      ))}
    </div>
  </CardContent>
</Card>

      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Top Selling Products</CardTitle>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Icons.download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium">Product</th>
                    <th className="py-3 px-4 text-left font-medium">Category</th>
                    <th className="py-3 px-4 text-left font-medium">Sold</th>
                    <th className="py-3 px-4 text-left font-medium">Revenue</th>
                    <th className="py-3 px-4 text-left font-medium">Stock</th>
                    <th className="py-3 px-4 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {productData.map((product) => (
                    <tr key={product.name} className="hover:bg-muted/50">
                      <td className="py-3 px-4">{product.name}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline">{product.category}</Badge>
                      </td>
                      <td className="py-3 px-4">{product.sold}</td>
                      <td className="py-3 px-4">${product.revenue}</td>
                      <td className="py-3 px-4">{product.stock}</td>
                      <td className="py-3 px-4">
                        {product.stock < 5 ? (
                          <Badge variant="destructive">Low Stock</Badge>
                        ) : product.stock < 10 ? (
                          <Badge >Warning</Badge>
                        ) : (
                          <Badge >In Stock</Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;