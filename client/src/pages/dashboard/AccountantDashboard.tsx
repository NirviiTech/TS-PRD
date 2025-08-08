import React from "react";
import Card from "../../components/Card";

export default function AccountantDashboard() {
  const stats = [
    { label: "Pending Invoices", value: 12 },
    { label: "Paid This Month", value: "$12,000" },
    { label: "Outstanding Balance", value: "$3,500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-emerald-700">
        Accountant Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <Card key={s.label} className="text-center">
            <p className="text-gray-500">{s.label}</p>
            <p className="text-2xl font-bold text-emerald-700">{s.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
