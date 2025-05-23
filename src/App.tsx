import "./App.css";
import { useState } from "react";
import formatTransaction from "./helpers/formatTransaction";

type emanTransaction = {
  transaction: number;
  type: string;
};

function App() {
  const [transactions, setTransaction] = useState<emanTransaction[]>([]);

  function postTransaction(formData: FormData) {
    const transactionAmount = formData.get("transactionAmount");
    const transactionType = formData.get("transactionType");

    const newTransaction: emanTransaction = {
      transaction: Number(transactionAmount),
      type: transactionType as string,
    };

    setTransaction([...transactions, newTransaction]);
    formData.delete("transactionAmount");
    formData.delete("transactionType");
  }
  return (
    <>
      <h1>Budgeting Web Application</h1>

      <form action={postTransaction}>
        <label htmlFor="transactionAmount">
          Transaction Amount
          <input
            id="transactionAmount"
            name="transactionAmount"
            type="number"
          />
        </label>
        <label htmlFor="transactionType">
          Transaction Type
          <select id="transactionType" name="transactionType">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </label>
        <input type="submit" value="Log" />
      </form>

      <table border={1}>
        <thead>
          <th>Transactions</th>
          <th>Transaction Type</th>
        </thead>
        <tbody>
          {transactions.length != 0 ? (
            transactions.map((transaction) => (
              <>
                <tr>
                  <td>$
                    {transaction.transaction.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td>{transaction.type}</td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td colSpan={2}>Add a Transaction to display them here!</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
