import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../ui/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState();

  const selectYearFilter = (year) => {
    setYearFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearFilter}
        onSelectYearFilter={selectYearFilter}
      />
      {props.expenses.map((expense) => {
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
