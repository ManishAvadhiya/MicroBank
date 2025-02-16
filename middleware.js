import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const role = req.cookies.get("role")?.value; // Get role from cookies

  // Define role-based route access
  const userRoutes = ["/user/dashboard","/user/transactions","/user/voting"];
  const agentRoutes = ["/agent/dashboard", "/agent/transactions","/agent/loan-repayment","/agent/deposit","/agent/withdraw","/agent/transactions",];

  if (userRoutes.includes(url.pathname) && role !== "user") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
  
  if (agentRoutes.includes(url.pathname) && role !== "agent") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*", 
    "/user/dashboard/:path*", 
    "/agent/dashboard/:path*", 
    "/agent/transactions/:path*",
    "/agent/loan-repayment/:path*",
  ],
};
