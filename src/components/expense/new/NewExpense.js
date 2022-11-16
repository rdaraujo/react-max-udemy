import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [addingNewExpense, setAddingNewExpense] = useState(false);

  const saveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: (Math.random() * 1000000000).toFixed(0).toString(),
    };
    setAddingNewExpense(false);
    props.onAddExpenseHandler(expenseData);
  };

  const cancelHandler = () => {
    setAddingNewExpense(false);
  };

  return (
    <div className="new-expense">
      {addingNewExpense ? (
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCancelAddingNew={cancelHandler} />
      ) : (
        <button onClick={setAddingNewExpense}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
