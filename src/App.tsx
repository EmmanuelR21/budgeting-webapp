import "./App.css";
import { LineChart } from "@mui/x-charts/LineChart";
import useTransactions from "./hooks/useTransactions";

function App() {
  const { transactions, postTransaction } = useTransactions();

  const date1 = new Date();
  const date2 = new Date();

  date2.setDate(date2.getDate() + 1);

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
            <option defaultValue="General">General</option>
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

      <LineChart
        grid={{ vertical: true, horizontal: true }}
        xAxis={[
          {
            id: "timestamp",
            scaleType: "time",
            data: [date1, date2],
          },
        ]}
        height={500}
        series={[
          {
            data: [13, 10],
          },
        ]}
      ></LineChart>
    </>
  );
}

export default App;
