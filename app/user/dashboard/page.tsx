import Sidebar from "@/components/Sidebar"
import Link from "next/link"
import UserSidebar from "@/components/UserSidebar"
export default function Dashboard() {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Account Balance</h2>
            <p className="text-3xl font-bold">$1,234.56</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Loan Status</h2>
            <p className="text-lg">No active loans</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Deposit</span>
                <span className="text-green-600">+$500.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Withdrawal</span>
                <span className="text-red-600">-$100.00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Loan Repayment</span>
                <span className="text-blue-600">-$200.00</span>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

