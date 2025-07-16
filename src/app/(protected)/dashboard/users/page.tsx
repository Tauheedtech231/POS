'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Search, Plus } from 'lucide-react';
import Link from 'next/link';

type User = {
  name: string;
  role: string;
  store: string;
  lastLogin: string;
  status: 'Active' | 'Inactive';
};

const usersData: User[] = [
  {
    name: 'Sophia Clark',
    role: 'Manager',
    store: 'Main Street Store',
    lastLogin: '2023-09-20 10:00 AM',
    status: 'Active',
  },
  {
    name: 'Ethan Carter',
    role: 'Cashier',
    store: 'Main Street Store',
    lastLogin: '2023-09-20 09:30 AM',
    status: 'Active',
  },
  {
    name: 'Olivia Bennett',
    role: 'Manager',
    store: 'Downtown Store',
    lastLogin: '2023-09-20 09:00 AM',
    status: 'Active',
  },
  {
    name: 'Liam Foster',
    role: 'Cashier',
    store: 'Downtown Store',
    lastLogin: '2023-09-19 05:00 PM',
    status: 'Inactive',
  },
  {
    name: 'Ava Harper',
    role: 'Cashier',
    store: 'Uptown Store',
    lastLogin: '2023-09-19 04:30 PM',
    status: 'Inactive',
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = usersData.filter((user) =>
    `${user.name} ${user.role} ${user.store}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header with Add User Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
      <Link href="/dashboard/adduser" >  <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button></Link>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Store</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.store}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-4">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
