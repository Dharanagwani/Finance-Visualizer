import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import { Container } from "react-bootstrap";

export default function App() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(index) {
    setTransactions(transactions.filter((_, i) => i !== index));
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Personal Finance Visualizer</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <ExpenseChart transactions={transactions} />
    </Container>
  );
}
