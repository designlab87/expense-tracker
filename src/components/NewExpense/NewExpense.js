import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'e'+(props.items.length + 1)
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showNewExpenseFormHandler = () => {
    setShowForm(true);
  }

  const stopEditingHandler = () => {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {showForm ? 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> : 
        <button onClick={showNewExpenseFormHandler}>Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;