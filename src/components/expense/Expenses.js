import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../ui/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState(
    new Date(Date.now()).getFullYear()
  );

  const selectYearFilter = (year) => {
    setYearFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearFilter}
        onSelectYearFilter={selectYearFilter}
      />
      {props.expenses
        .filter(
          (expense) =>
            yearFilter === "" ||
            expense.date.getFullYear() === Number(yearFilter)
        )
        .map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
