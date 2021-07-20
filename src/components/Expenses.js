import ExpenseItem from './ExpenseItem';

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
  return <>{itemList}</>;
}
