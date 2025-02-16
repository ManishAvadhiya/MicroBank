import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/agent/dashboard" className="block hover:bg-gray-200 p-2 rounded">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/agent/deposit" className="block hover:bg-gray-200 p-2 rounded">
              Deposit
            </Link>
          </li>
          <li>
            <Link href="/agent/withdraw" className="block hover:bg-gray-200 p-2 rounded">
              Withdraw
            </Link>
          </li>
          <li>
            <Link href="/agent/transactions" className="block hover:bg-gray-200 p-2 rounded">
              Transactions
            </Link>
          </li>
          <li>
            <Link href="/agent/loan-request" className="block hover:bg-gray-200 p-2 rounded">
              Loan Request
            </Link>
          </li>
          
          <li>
            <Link href="/agent/loan-repayment" className="block hover:bg-gray-200 p-2 rounded">
              Loan Repayment
            </Link>
          </li>
          
          
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

