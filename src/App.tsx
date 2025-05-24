import "./App.css";
import { useState } from "react";

type emanTransaction = {
  transaction: number;
  type: string;
  description: string;
};

function App() {
  const [transactions, setTransaction] = useState<emanTransaction[]>([]);

  function postTransaction(formData: FormData) {
    const transactionAmount = formData.get("transactionAmount");
    const transactionType = formData.get("transactionType");
    const transactionDescription = formData.get("transactionDescription");

    const newTransaction: emanTransaction = {
      transaction: Number(transactionAmount),
      type: transactionType as string,
      description: transactionDescription as string,
    };

    setTransaction([...transactions, newTransaction]);
    formData.delete("transactionAmount");
    formData.delete("transactionType");
    formData.delete("transactionDescription");
  }
  return (
    <>
      <h1>Budgeting Web Application</h1>

      <form
        style={{ display: "flex", flexDirection: "column" }}
        action={postTransaction}
      >
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
            <option selected value="General">
              General
            </option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </label>
        <label htmlFor="transactionDescription">
          Description
          <input
            id="transactionDescription"
            name="transactionDescription"
            type="text"
          />
        </label>
        <input type="submit" value="Log" />
      </form>

      <table border={1}>
        <thead>
          <th>Transactions</th>
          <th>Transaction Type</th>
          <th>Description</th>
        </thead>
        <tbody>
          {transactions.length != 0 ? (
            transactions.map((transaction) => (
              <>
                <tr>
                  <td>
                    $
                    {transaction.transaction.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td>{transaction.type}</td>
                  <td>{transaction.description}</td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Add a Transaction to display them here!</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
