"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentArticles = [
  {
    id: 1,
    title: "Next.js 14 Release Overview",
    published: true,
    comments: 5,
    date: "2024-12-15",
  },
  {
    id: 2,
    title: "Using Prisma with PostgreSQL",
    published: false,
    comments: 12,
    date: "2025-01-10",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips & Tricks",
    published: true,
    comments: 8,
    date: "2025-02-01",
  },
];

const RecentArticlesTable = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-x-auto">
      {/* Header with title and view all button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recent Articles</h2>
        <Link href="/dashboard/articles">
          <Button variant="outline">View All Articles</Button>
        </Link>
      </div>

      {/* Table */}
      <Table>
        <TableCaption>List of latest published or draft articles.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[160px]">Title</TableHead>
            <TableHead>Published</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {recentArticles.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">{article.title}</TableCell>
              <TableCell>
                {article.published ? (
                  <span className="text-green-600 font-medium">Yes</span>
                ) : (
                  <span className="text-red-500 font-medium">No</span>
                )}
              </TableCell>
              <TableCell>{article.comments}</TableCell>
              <TableCell>{new Date(article.date).toLocaleDateString()}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentArticlesTable;
