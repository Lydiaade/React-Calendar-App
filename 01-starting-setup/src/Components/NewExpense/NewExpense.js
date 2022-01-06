import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpense(false);
  };

  const onAddNewExpense = () => {
    setNewExpense(true);
  };

  const onCancelNewExpense = () => {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!newExpense && (
        <button onClick={onAddNewExpense}>Add New Expense</button>
      )}
      {newExpense && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
