import React from "react";
import Card from "../../components/Card";

type InvoicePreviewProps = {
  client: string;
  amount: number;
};

export default function InvoicePreview({ client, amount }: InvoicePreviewProps) {
  return (
    <Card>
      <h2 className="font-bold mb-2">Invoice Preview</h2>
      <p>Client: {client}</p>
      <p>Amount: ${amount}</p>
    </Card>
  );
}
