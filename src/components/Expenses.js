import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {
  let itemList = [];
  props.items.forEach((expense) => {
    itemList.push(
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });
  return <div className='expenses'>{itemList}</div>;
}
