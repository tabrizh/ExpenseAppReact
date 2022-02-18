import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const openEditHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div>
      <div className="new-expense">
        {editing ? (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onStopEditing={stopEditingHandler}
          />
        ) : (
          <button onClick={openEditHandler}>Add Expense</button>
        )}
      </div>
    </div>
  );
};

export default NewExpense;
