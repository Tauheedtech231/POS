"use server"
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  // Optional: Log the current user (for debugging only)
  console.log("Current user:", user);

  return <>{children}</>;
}
