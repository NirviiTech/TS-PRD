import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { getEmployees } from "../../services/api";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<{ id: string; name: string; role: string }[]>([]);

  useEffect(() => {
    // Fetch employees from API (mocked for now)
    getEmployees().then(setEmployees);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Employees</h1>
      <Card>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{e.id}</td>
                <td className="p-3 border-b">{e.name}</td>
                <td className="p-3 border-b">{e.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="mt-4">
        <Button variant="primary" onClick={() => alert("Sync triggered")}>
          Sync with Keka
        </Button>
      </div>
    </div>
  );
}
