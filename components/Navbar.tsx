"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Navbar = () => {
  const [dashboardLink, setDashboardLink] = useState("/login"); // Default to login

  useEffect(() => {
    const role = Cookies.get("role");
    if (role === "user") {
      setDashboardLink("/user/dashboard");
    } else if (role === "agent") {
      setDashboardLink("/agent/dashboard");
    }
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Microbank
        </Link>
        <div className="space-x-4">
          <Link href={dashboardLink} className="hover:underline">
            Dashboard
          </Link>
          <Link href="/login" className="hover:underline">
            Login/Register
          </Link>
          {/* <Link href="/register" className="hover:underline">
            Register
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
