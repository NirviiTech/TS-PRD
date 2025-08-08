import React from "react";
import Card from "../../components/Card";

export default function BillingAnalytics() {
  const data = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 7000 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Billing Analytics</h1>
      {data.map((d) => (
        <Card key={d.month} className="flex justify-between">
          <span>{d.month}</span>
          <span className="font-semibold">${d.revenue}</span>
        </Card>
      ))}
    </div>
  );
}
