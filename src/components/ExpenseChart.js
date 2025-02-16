import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Container } from "react-bootstrap";

export default function ExpenseChart({ transactions }) {
  const data = transactions.reduce((acc, t) => {
    const month = new Date(t.date).toLocaleString("default", { month: "short" });
    const existing = acc.find((d) => d.name === month);
    if (existing) existing.amount += t.amount;
    else acc.push({ name: month, amount: t.amount });
    return acc;
  }, []);

  return (
    <Container className="p-4 mt-3 border rounded shadow bg-white">
      <h3 className="mb-3">Monthly Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
