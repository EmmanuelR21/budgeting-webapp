import { useState } from "react";
import type { EmanTransaction } from "../types/transactions";

export default function useTransactions() {
  const [transactions, setTransaction] = useState<EmanTransaction[]>([]);

  function postTransaction(formData: FormData) {
    const transactionAmount = formData.get("transactionAmount");
    const transactionType = formData.get("transactionType");
    const transactionDescription = formData.get("transactionDescription");

    const newTransaction: EmanTransaction = {
      transaction: Number(transactionAmount),
      type: transactionType as string,
      description: transactionDescription as string,
    };

    setTransaction([...transactions, newTransaction]);
    formData.delete("transactionAmount");
    formData.delete("transactionType");
    formData.delete("transactionDescription");
  }

  return { transactions, postTransaction };
}
