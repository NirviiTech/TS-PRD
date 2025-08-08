import React, { useState } from "react";
import Button from "../../components/Button";

export default function ClientForm() {
  const [companyName, setCompanyName] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`New client created: ${companyName} (${currency})`);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Add New Client</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-3 border rounded-lg"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
        <Button type="submit" variant="primary" className="w-full">
          Save Client
        </Button>
      </form>
    </div>
  );
}
