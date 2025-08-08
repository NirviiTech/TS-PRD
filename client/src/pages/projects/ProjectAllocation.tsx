import React, { useState } from "react";
import Card from "../../components/Card";

export default function ProjectAllocation() {
  const [allocations, setAllocations] = useState([
    { project: "Website Redesign", employee: "Alice" },
    { project: "Mobile App", employee: "Bob" },
  ]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Project Allocations</h1>
      <div className="space-y-3">
        {allocations.map((a, idx) => (
          <Card key={idx}>
            <p className="font-medium">{a.project}</p>
            <p className="text-gray-500 text-sm">Assigned to: {a.employee}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
