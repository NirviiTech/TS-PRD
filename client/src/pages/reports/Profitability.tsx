import React from "react";
import Card from "../../components/Card";

export default function Profitability() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Profitability Report</h1>
      <Card>
        <p>Revenue: $20,000</p>
        <p>Expenses: $12,000</p>
        <p className="font-bold">Profit: $8,000</p>
      </Card>
    </div>
  );
}
