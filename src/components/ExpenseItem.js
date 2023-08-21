import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
function ExpenseItem(props){
    return (
    <div className="expense-item">
    <ExpenseDate date={props.date}/>
   
        <ExpenseDetails item={props.item} location={props.location} amount={props.amount}/>
  
    </div>
    )
}
export default ExpenseItem 