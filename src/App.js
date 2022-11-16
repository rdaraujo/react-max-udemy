import { useState } from "react";
import Expenses from "./components/expense/Expenses";
import NewExpense from "./components/expense/new/NewExpense";

const INITIAL_STATE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_STATE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...expenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
