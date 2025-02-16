import Sidebar from "@/components/Sidebar"
import UserSidebar from "@/components/UserSidebar"

export default function VotingSystem() {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Community Voting System</h1>
        <div className="space-y-6">
          {[1, 2, 3].map((loan) => (
            <div key={loan} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Loan Request #{loan}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p>
                    <strong>Amount:</strong> $1,000
                  </p>
                  <p>
                    <strong>Purpose:</strong> Business expansion
                  </p>
                  <p>
                    <strong>Requester:</strong> User {String.fromCharCode(64 + loan)}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Credit Score:</strong> 720
                  </p>
                  <p>
                    <strong>Repayment Term:</strong> 12 months
                  </p>
                  <p>
                    <strong>Interest Rate:</strong> 5%
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">Current Votes:</span> 3 Approve / 1 Reject
                </div>
                <div className="space-x-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

