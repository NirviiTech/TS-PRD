import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ClientList() {
  const navigate = useNavigate();
  const clients = [
    { id: "CLI001", name: "TechCorp Ltd", currency: "USD" },
    { id: "CLI002", name: "GreenFoods Inc", currency: "INR" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Clients</h1>
        <Button onClick={() => navigate("/dashboard/admin/clients/new")}>+ Add Client</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clients.map((c) => (
          <div
            key={c.id}
            className="cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => navigate(`/dashboard/admin/clients/${c.id}`)}
          >
            <Card className="p-4">
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">ID: {c.id}</p>
              <p className="text-sm text-gray-500">Currency: {c.currency}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}