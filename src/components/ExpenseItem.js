import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'
function ExpenseItem(props){
    const clickHandler = () =>{
        console.log("clicked!!")
    }
    return (
    <div className="expense-item">
    <ExpenseDate date={props.date}/>
   
        <ExpenseDetails item={props.item} location={props.location} amount={props.amount}/>
        <button onClick={clickHandler}>Delete</button>
    </div>
    
    )
}
export default ExpenseItem 