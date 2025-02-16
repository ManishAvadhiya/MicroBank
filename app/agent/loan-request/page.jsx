"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const LoanRequest = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    accountNumber: "",
    amount: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/loan-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Loan request submitted successfully!");
        setFormData({ applicantName: "", accountNumber: "", amount: "" });
      } else {
        setMessage("Failed to submit loan request.");
      }
    } catch (error) {
      console.error("Error submitting loan request:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Loan Request</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Submit Loan Request</h2>
          {message && (
            <p className="text-center text-green-600 font-medium bg-green-100 p-2 rounded mb-4">
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Applicant Name</label>
              <input
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Loan Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanRequest;