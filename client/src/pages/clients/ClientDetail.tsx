import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";

export default function ClientDetail() {
  const { id } = useParams();

  const client = {
    id,
    name: "TechCorp Ltd",
    currency: "USD",
    projects: ["Website Redesign", "Mobile App"],
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{client.name}</h1>
      <Card className="mb-6">
        <p className="text-gray-600">Client ID: {client.id}</p>
        <p className="text-gray-600">Currency: {client.currency}</p>
      </Card>
      <h2 className="text-lg font-semibold mb-2">Projects</h2>
      <div className="space-y-2">
        {client.projects.map((p) => (
          <Card key={p}>{p}</Card>
        ))}
      </div>
    </div>
  );
}
