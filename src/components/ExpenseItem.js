import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate = new Date(2023,8,15)
    const expenseItem = "Grocery"
    const itemPrice = "₹1000"
    const locationOfExpenditure = "Bangalore"
    return (
    <div className="expense-item">
    <div>{expenseDate.toDateString()}</div>
    <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <h2>{locationOfExpenditure}</h2>
        <div className="expense-item__price">{itemPrice}</div>
    </div>
    </div>
    )
}
export default ExpenseItem