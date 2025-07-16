import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

import Navbar from "@/components/home/Navbar";


export const metadata: Metadata = {
  title: "POS Project",
  description: "Next.js App with Clerk Auth and Theme Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
          <div>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            
            </ThemeProvider>
          </div>
          <ToastContainer position="top-right" autoClose={3000} />
        </body>
      </html>
    </ClerkProvider>
  );
}
