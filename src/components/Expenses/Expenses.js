import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  let itemList = [];
  const [enteredYear, setEnteredYear] = useState('');

  props.items.forEach((expense) => {
    itemList.push(
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });

  const addYearSelectHandler = (expense) => {
    console.log('In Expenses.js');
    console.log(expense);
    setEnteredYear(expense);
  };

  return (
    <div>
      <ExpensesFilter onYearSelect={addYearSelectHandler} />
      <Card className='expenses'>{itemList}</Card>
    </div>
  );
};

export default Expenses;
