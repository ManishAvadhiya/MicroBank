import Sidebar from "@/components/Sidebar"
import UserSidebar from "@/components/UserSidebar"

export default function TransactionHistory() {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Transaction History</h1>
        <div className="mb-4 flex justify-between items-center">
          <div className="space-x-4">
            <input type="date" className="border border-gray-300 rounded p-2" />
            <input type="date" className="border border-gray-300 rounded p-2" />
          </div>
          <select className="border border-gray-300 rounded p-2">
            <option value="all">All Transactions</option>
            <option value="deposit">Deposits</option>
            <option value="withdrawal">Withdrawals</option>
            <option value="loan">Loan Transactions</option>
          </select>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: "2023-05-01", type: "Deposit", amount: 500, balance: 1500 },
                { date: "2023-05-03", type: "Withdrawal", amount: -200, balance: 1300 },
                { date: "2023-05-05", type: "Loan Repayment", amount: -100, balance: 1200 },
              ].map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.type}</td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap ${transaction.amount >= 0 ? "text-green-600" : "text-red-600"}`}
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
      </div>
    </div>
  )
}

