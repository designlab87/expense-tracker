import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper',            amount: 1894.12,    date: new Date(2020, 7, 14), },
  { id: 'e2', title: 'New TV',                  amount: 799.49,     date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'New Puppy',               amount: 294.67,     date: new Date(2021, 2, 28), },
  { id: 'e4', title: 'New Desk',                amount: 450.33,     date: new Date(2021, 5, 12), },
  { id: 'e5', title: 'Matcha',                  amount: 37.99,   date: new Date(2022, 2, 5), },
  { id: 'e6', title: 'Ashwagandha',             amount: 50.99,      date: new Date(2022, 7, 21), },
  { id: 'e7', title: 'Yoga Mat',                amount: 29.99,      date: new Date(2022, 8, 6), }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>{
      return [
        expense,
        ...prevExpenses
      ];
    });
  };

  return (
    <div>
      <NewExpense 
        items={expenses} 
        onAddExpense={addExpenseHandler} 
      />
      <Expenses items={expenses}/>
    </div>
  );

}

export default App;
