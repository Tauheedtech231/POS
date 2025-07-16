"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import LeftSidebar from "@/components/adminpanel/LeftSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
    
      <header className="flex sm:hidden justify-between items-center p-4 border-b border-gray-200 bg-background">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <LeftSidebar />
          </SheetContent>
        </Sheet>
      </header>

      {/* Sidebar for desktop */}
      <aside className="hidden sm:block w-64 border-r border-white min-h-screen p-4">
        <LeftSidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6">{children}</main>
    </div>
  );
};

export default Layout;
