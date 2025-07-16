'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import SearchInput from '../Right/SearchInput';
import { ModeToggle } from '../Right/ModeToggle';
import { MenuIcon, X, Bell } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const pathname = usePathname();

  // 📌 Base links
  const baseLinks = ['Dashboard', 'Sales', 'Inventory', 'Customers', 'Reports'];
  let navLinks = [...baseLinks];

  // 🧠 Dynamic additions based on pathname
  if (pathname === '/reports') {
    navLinks.push('Orders', 'Staff'); // Remove 'Products'
  } else if (pathname === '/settings') {
    navLinks.push('Products', 'Settings'); // Remove 'Staff'
  } 
  else if(pathname==='/staff'){
    navLinks = navLinks.filter(link => link !== 'Inventory');
    navLinks.push('Orders', 'Products',); 
    
  }
  else if(pathname==='/dashboard/users'){
    navLinks = navLinks.filter(link => link !== 'Sales' )
    navLinks.push("Settings" )
  }
  else {
    navLinks.push('Products'); // Default
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg shadow-md"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[100%]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-1 group">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-transparent bg-clip-text group-hover:blur-[1px] group-hover:brightness-125 transition-all duration-300">
              Retail 
            </span>
            <span className="text-foreground group-hover:text-indigo-500 transition-all duration-300">
              POS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary relative transition"
              >
                <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {item}
                </span>
              </Link>
            ))}

            <SignedOut>
              <SignInButton>
                <Button className="rounded-full shadow hover:scale-105 transition">Login</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="outline" className="rounded-full shadow hover:scale-105 transition">
                  Sign up
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bell className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </div>
                <UserButton afterSignOutUrl="/" />
                <SignOutButton>
                  <Button variant="outline" className="rounded-full">Logout</Button>
                </SignOutButton>
              </div>
            </SignedIn>

            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <SearchInput />
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setMobile(!isMobile)}>
              {isMobile ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background px-4 pt-4 pb-6 rounded-b-md shadow-md"
            >
              <div className="flex flex-col gap-4 text-sm font-medium">
                {navLinks.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setMobile(false)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                ))}

                <SignedOut>
                  <SignInButton mode="modal">
                    <Button className="w-full mt-2">Login</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button variant="outline" className="w-full">Sign up</Button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center justify-between mt-4 px-1">
                    <div className="relative">
                      <Bell className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    </div>
                    <UserButton afterSignOutUrl="/" />
                    <SignOutButton>
                      <Button variant="outline" size="sm">Logout</Button>
                    </SignOutButton>
                  </div>
                </SignedIn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
