import React, { useState } from "react";
import Button from "../../components/Button";

export default function ProjectCreate() {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Project created: ${name} for ${client}`);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Create Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Client Name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        <Button type="submit" variant="primary" className="w-full">
          Save Project
        </Button>
      </form>
    </div>
  );
}
