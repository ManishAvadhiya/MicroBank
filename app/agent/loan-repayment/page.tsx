import Sidebar from "@/components/Sidebar"

export default function LoanRepaymentTracking() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Loan Repayment Tracking</h1>
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Loan Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Loan Amount:</strong> $5,000
              </p>
              <p>
                <strong>Interest Rate:</strong> 5%
              </p>
              <p>
                <strong>Term:</strong> 12 months
              </p>
            </div>
            <div>
              <p>
                <strong>Remaining Balance:</strong> $3,250
              </p>
              <p>
                <strong>Next Payment Due:</strong> June 1, 2023
              </p>
              <p>
                <strong>Amount Due:</strong> $450
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Repayment Schedule</h2>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount Due
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: "2023-05-01", amount: 450, status: "Paid" },
                { date: "2023-06-01", amount: 450, status: "Pending" },
                { date: "2023-07-01", amount: 450, status: "Upcoming" },
              ].map((payment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : payment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

