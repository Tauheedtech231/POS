'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BarChart2, Boxes, ArrowRight, TrendingUp, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const cardVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 }
  }
};

export default function ReportsPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 md:p-10 space-y-8 max-w-6xl mx-auto"
    >
      <div className="space-y-2">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          📊 Analytics Dashboard
        </motion.h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Gain valuable business insights with interactive sales and inventory reports.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Report Card */}
        <motion.div whileHover="hover" variants={cardVariants}>
          <Link href="/salesreports" passHref>
            <Card className="group relative overflow-hidden border border-muted/50 hover:border-primary/30 transition-all cursor-pointer bg-gradient-to-br from-background to-muted/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Sales Analytics
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Last 30 days performance
                  </p>
                </div>
                <BarChart2 className="w-8 h-8 text-primary/80 group-hover:text-primary group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Analyze revenue trends, top products, and customer purchasing patterns.
                </p>
               <Link href="/dashboard/sales-reports" passHref> <Button variant="outline" size="sm" className="group/button">
                  View Report
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </Button></Link>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        {/* Inventory Movement Report Card */}
        <motion.div whileHover="hover" variants={cardVariants}>
          <Link href="/inventorymovementreport" passHref>
            <Card className="group relative overflow-hidden border border-muted/50 hover:border-primary/30 transition-all cursor-pointer bg-gradient-to-br from-background to-muted/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Inventory Insights
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Real-time stock movement
                  </p>
                </div>
                <Boxes className="w-8 h-8 text-primary/80 group-hover:text-primary group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Track stock levels, movement history, and product availability.
                </p>
                <Button variant="outline" size="sm" className="group/button">
                  View Report
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>

      {/* Additional Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-muted/50 p-4 rounded-lg border"
        >
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-bold">$24,532</p>
          <p className="text-sm text-green-500 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            12% from last month
          </p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-muted/50 p-4 rounded-lg border"
        >
          <p className="text-sm text-muted-foreground">Inventory Items</p>
          <p className="text-2xl font-bold">1,248</p>
          <p className="text-sm text-muted-foreground">Across 12 categories</p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-muted/50 p-4 rounded-lg border"
        >
          <p className="text-sm text-muted-foreground">Top Product</p>
          <p className="text-2xl font-bold">Premium Widget</p>
          <p className="text-sm text-muted-foreground">342 sold this month</p>
        </motion.div>
      </div>
    </motion.main>
  );
}