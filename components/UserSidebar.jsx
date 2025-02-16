import Link from "next/link";

const UserSidebar = () => {
  return (
    <div className="bg-gray-100 w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/user/dashboard" className="block hover:bg-gray-200 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/user/transactions" className="block hover:bg-gray-200 p-2 rounded">
              Transactions
            </Link>
          </li>
          <li>
            <Link href="/user/voting" className="block hover:bg-gray-200 p-2 rounded">
              Voting System
            </Link>
          </li>
          <li>
            <Link href="/user/loan-repayment" className="block hover:bg-gray-200 p-2 rounded">
              Loan Repayment
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
