"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ amount, accountNumber, description });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Withdraw Money</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Withdrawal Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  id="amount"
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter Amount"
                />
              </div>

              <div>
                <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <input
                  id="account-number"
                  type="text"
                  required
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter Account Number"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description (Optional)
                </label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter Description"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded font-medium hover:bg-red-700 transition"
              >
                Withdraw
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Withdrawals</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Account 54321</span>
                <span className="text-red-600">-$200.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Account 98765</span>
                <span className="text-red-600">-$500.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Account 44556</span>
                <span className="text-red-600">-$150.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
