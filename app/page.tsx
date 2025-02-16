import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Microbank System</h1>
          <p className="text-xl mb-8">A community-driven microbanking platform</p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Deposit", "Withdraw", "Loan Requests", "Community Voting"].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

