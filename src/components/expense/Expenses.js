import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../ui/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState();

  const selectYearFilter = (year) => {
    console.log(year);
    setYearFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onSelectYearFilter={selectYearFilter} />
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      />
    </Card>
  );
};

export default Expenses;
