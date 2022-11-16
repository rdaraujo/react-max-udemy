import { useState } from "react";

import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../ui/Card";

import "./Expenses.css";

const Expenses = props => {
  const [yearFilter, setYearFilter] = useState(new Date(Date.now()).getFullYear());

  const selectYearFilter = year => {
    setYearFilter(year);
  };

  const filteredExpenses = props.expenses.filter(
    expense => yearFilter === "" || expense.date.getFullYear() === Number(yearFilter)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={yearFilter} onSelectYearFilter={selectYearFilter} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
