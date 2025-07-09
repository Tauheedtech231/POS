import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FileText, MessageCircle, Heart } from 'lucide-react';
import Recentarticles from './Recentarticles';

const Admindashboard = () => {
  // Replace with dynamic counts later
  const articleCount = 42;
  const commentCount = 128;
  const likeCount = 256;

  return (
    <main className="min-h-screen px-4 py-6 md:px-6 lg:px-12">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Blog Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage your blog content</p>
        </div>
        <Link href="/dashboard/articles/new" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">Create Article</Button>
        </Link>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Total Articles */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articleCount}</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>

        {/* Total Comments */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
            <MessageCircle className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{commentCount}</div>
            <p className="text-xs text-muted-foreground">+12 from last week</p>
          </CardContent>
        </Card>

        {/* Total Likes */}
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
            <Heart className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{likeCount}</div>
            <p className="text-xs text-muted-foreground">+30 from yesterday</p>
          </CardContent>
        </Card>
      </div>
      <Recentarticles/>
    </main>
  );
};

export default Admindashboard;
