import React from 'react';

import './NewExpense.css';
import './ExpenseControl.css';

const ExpenseControl = (props) => {
  const submitHandler = () => {
    props.onShowNewExpenseForm(true);
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="expense-control__actions">
          <button type="submit">Add New Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseControl;