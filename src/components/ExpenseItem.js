import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 3, 2021</div>
      <div className="expense-item__description">
        <h2>Car Tyres</h2>
        <div className="expense-item__price">$423.23</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
