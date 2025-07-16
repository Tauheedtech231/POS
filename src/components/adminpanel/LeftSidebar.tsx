"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Home, FileText,  BarChart2, Settings,History } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Overview", icon: Home, href: "/dashboard" },
  { name: "Users", icon: FileText, href: "/dashboard/users" },

  { name: "Analytics", icon: BarChart2, href: "/dashboard/analytics" },
   { name: "Purchase History", icon: History, href: "/dashboard/history" },
   
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

const LeftSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"  className="lg:m-2 sm:m-r-[1rem] font-bold">Dashboard</Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[300px] p-6">
        <SheetHeader>
          <SheetTitle className="text-xl">POS Dashboard</SheetTitle>
          <SheetDescription className="text-sm">
              Quick navigation for POS features.
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <SheetFooter className="mt-8">
          <SheetClose asChild>
            <Button variant="secondary" className="w-full">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default LeftSidebar;
