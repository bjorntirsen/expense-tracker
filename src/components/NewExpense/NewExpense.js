import { useState } from 'react';

import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const onClickHandler = () => {
    setDisplayForm(true);
  };

  const onCancelHandler = () => {
    setDisplayForm(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  return (
    <div className='new-expense'>
      {displayForm ? (
        <ExpenseForm onCancel={onCancelHandler} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={onClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};
