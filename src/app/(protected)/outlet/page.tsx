'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Store,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Orders', icon: ShoppingCart, href: '/dashboard/orders' },
  { name: 'Products', icon: Package, href: '/dashboard/products' },
  { name: 'Customers', icon: Users, href: '/dashboard/customers' },
  { name: 'Outlets', icon: Store, href: '/dashboard/outlets' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className={clsx(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0 lg:static lg:inset-auto lg:shadow-none"
      )}>
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className="text-lg font-semibold">POS Dashboard</h1>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-4 space-y-1 px-4">
          {navItems.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 transition"
            >
              <Icon className="h-4 w-4" />
              {name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex flex-col flex-1 lg:pl-64">
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">POS Admin</h1>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
