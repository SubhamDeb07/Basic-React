import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props){
const [setTitle,updateTitle] = useState("")
const [setAmount,updateAmount] = useState("")
const [setDate,updateDate] = useState("")

  function changeTitle(event){
    updateTitle(event.target.value)
  }
  function changeAmount(event){
    updateAmount(event.target.value)
  }
  function changeDate(event){
    updateDate(event.target.value)
  }
  function addItem(event){
    event.preventDefault()
    const expenseItem = {
      item :setTitle,
      amount :setAmount,
      date :new Date(setDate)
    }
    console.log(expenseItem)
   
  }
    
return (

    <form onSubmit={addItem}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={changeTitle} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={changeAmount} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' onChange={changeDate} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>   
  
)
}
export default ExpenseForm