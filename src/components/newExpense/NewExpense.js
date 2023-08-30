import React,{useState} from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

function NewExpense(props){
   const expenseHandler = (enteredExpense) =>{
    const expense = {
             ...enteredExpense
    }
   props.enterNewExpense(expense)
   setIsEditing(false)
   }
   function saveEditingHandler(){
    setIsEditing(true)
   }
   function cancelEditingHandler(){
      setIsEditing(false)
   }
   const [isEditing,setIsEditing] = useState(false)
    return (
        <div className='new-expense'>
          {!isEditing && <button onClick={saveEditingHandler}>Add Expense</button>}
        {isEditing  && <ExpenseForm 
        saveExpenses={expenseHandler}
        onCancel={cancelEditingHandler} />}
      </div>
    )
}

export default NewExpense