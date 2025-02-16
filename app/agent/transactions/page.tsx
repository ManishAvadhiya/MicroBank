"use client"
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([
    { account: "1234567890", date: "2023-05-01", type: "Deposit", amount: 500, balance: 1500 },
    { account: "9876543210", date: "2023-05-02", type: "Withdrawal", amount: -200, balance: 1300 },
    { account: "5678901234", date: "2023-05-03", type: "Loan Repayment", amount: -100, balance: 1200 },
    { account: "6543210987", date: "2023-05-04", type: "Deposit", amount: 800, balance: 2000 },
  ]);

  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter !== "all" && transaction.type !== filter) return false;
    if (startDate && new Date(transaction.date) < new Date(startDate)) return false;
    if (endDate && new Date(transaction.date) > new Date(endDate)) return false;
    return true;
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Transaction History</h1>

        {/* Filter Section */}
        <div className="mb-4 flex justify-between items-center bg-white p-4 rounded shadow">
          <div className="space-x-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            <option value="all">All Transactions</option>
            <option value="Deposit">Deposits</option>
            <option value="Withdrawal">Withdrawals</option>
            <option value="Loan Repayment">Loan Transactions</option>
          </select>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.account}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.type}</td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap ${
                      transaction.amount >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount >= 0 ? "+" : ""}
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No transactions found.</p>
        )}
      </div>
    </div>
  );
}
