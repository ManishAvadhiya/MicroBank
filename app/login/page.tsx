"use client";
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const [aadhar, setAadhar] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (aadhar === "12345678" && pass === "12345678") {
      Cookies.set("role", "user");
      setError("");
      alert("User Login Successful!");
      router.push("/user/dashboard");
    } else if (aadhar === "87654321" && pass === "87654321") {
      Cookies.set("role", "agent");
      setError("");
      alert("Agent Login Successful!");
      router.push("/agent/dashboard");
    } else {
      setError("Invalid Aadhar Number or Password.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        
        {/* Information Box */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded">
          <p><strong>Note:</strong> This website is for testing purposes only and is not the final product.</p>
          <p>You can test the website using the following credentials:</p>
          <ul className="list-disc ml-6">
            <li>User: Aadhar - <strong>12345678</strong>, Password - <strong>12345678</strong></li>
            <li>Agent: Aadhar - <strong>87654321</strong>, Password - <strong>87654321</strong></li>
          </ul>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Sign in to your account
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div>
            <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">
              Aadhar Card Number
            </label>
            <input
              id="aadhar"
              name="aadhar"
              type="text"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Aadhar Card Number"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>

        <div className="text-center mt-4">
          <Link href="/register" className="text-sm font-medium text-blue-600 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
