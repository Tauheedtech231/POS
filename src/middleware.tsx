// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Protects all routes except static assets, API, etc.
};
