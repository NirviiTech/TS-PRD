import { useState } from "react";

export const useInvoice = () => {
  const [invoice, setInvoice] = useState({ client: "", amount: 0 });

  const updateInvoice = (client: string, amount: number) => {
    setInvoice({ client, amount });
  };

  return { invoice, updateInvoice };
};
