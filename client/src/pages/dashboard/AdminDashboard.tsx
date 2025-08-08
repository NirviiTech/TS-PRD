import React from "react";
import Card from "../../components/Card";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Clients", value: 24 },
    { label: "Active Projects", value: 8 },
    { label: "Monthly Revenue", value: "$18,500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-indigo-700">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <Card key={s.label} className="text-center">
            <p className="text-gray-500">{s.label}</p>
            <p className="text-2xl font-bold text-indigo-700">{s.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
