import React, { useState } from "react";
import Button from "../../components/Button";

export default function InvoiceGenerate() {
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");

  const handleGenerate = () => {
    alert(`Invoice generated for ${client} - $${amount}`);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Generate Invoice</h1>
      <input
        type="text"
        placeholder="Client Name"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />
      <Button onClick={handleGenerate} variant="primary" className="w-full">
        Generate
      </Button>
    </div>
  );
}
