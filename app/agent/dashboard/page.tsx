"use client"
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function AgentDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const transactions = [
    { account: "123456", user: "User A", type: "Deposit", amount: 500, balance: 1500 },
    { account: "234567", user: "User B", type: "Withdrawal", amount: -100, balance: 1400 },
    { account: "345678", user: "User C", type: "Loan Repayment", amount: -200, balance: 1200 },
  ];

  const loanRequests = [
    { account: "456789", user: "User D", amount: 1000, status: "Pending", votes: { approve: 3, reject: 1 } },
    { account: "567890", user: "User E", amount: 500, status: "Approved", votes: { approve: 4, reject: 0 } },
    { account: "678901", user: "User F", amount: 750, status: "Rejected", votes: { approve: 1, reject: 3 } },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Agent Dashboard</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 border border-gray-300 rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Account</th>
                <th className="border p-2">User</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{t.account}</td>
                  <td className="border p-2">{t.user}</td>
                  <td className="border p-2">{t.type}</td>
                  <td className={`border p-2 ${t.amount >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {t.amount >= 0 ? "+" : ""}${t.amount}
                  </td>
                  <td className="border p-2">${t.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Loan Requests with Voting Status */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Pending Loan Requests</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Account</th>
                <th className="border p-2">User</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Votes</th>
              </tr>
            </thead>
            <tbody>
              {loanRequests.map((loan, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{loan.account}</td>
                  <td className="border p-2">{loan.user}</td>
                  <td className="border p-2">${loan.amount}</td>
                  <td className={`border p-2 ${loan.status === "Approved" ? "text-green-600" : loan.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>
                    {loan.status}
                  </td>
                  <td className="border p-2">Approve: {loan.votes.approve} / Reject: {loan.votes.reject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
