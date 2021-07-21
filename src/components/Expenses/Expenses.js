import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
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
  return <Card className='expenses'>{itemList}</Card>;
};

export default Expenses;
