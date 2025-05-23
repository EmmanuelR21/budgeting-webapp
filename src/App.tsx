import "./App.css";

function App() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form: HTMLFormElement = event.currentTarget;
    const transactionAmount = form.elements.namedItem(
      "transactionAmount",
    ) as HTMLInputElement;
    const transactionType = form.elements.namedItem(
      "transactionType",
    ) as HTMLInputElement;

    console.log(transactionAmount.value, transactionType.value);

    transactionAmount.value = "";
    transactionType.value = transactionType.defaultValue;
  }
  return (
    <>
      <h1>Budgeting Web Application</h1>

      <form onSubmit={handleSubmit}>
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
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <input type="submit" value="Log" />
      </form>
    </>
  );
}

export default App;
