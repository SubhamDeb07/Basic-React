import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props){
const [setTitle,updateTitle] = useState("")
const [setAmount,updateAmount] = useState("")
const [setDate,updateDate] = useState("")
const [setLocation, updateLocation] = useState("")

  function changeTitle(event){
    updateTitle(event.target.value)
  }
  function changeAmount(event){
    updateAmount(event.target.value)
  }
  function changeDate(event){
    updateDate(event.target.value)
  }
  function changeLocation(event){
    updateLocation(event.target.value)
  }
  function addItem(event){
    event.preventDefault()
    const expenseItem = {
      item :setTitle,
      location:setLocation,
      amount :`₹${setAmount}`,
      date :new Date(setDate)
    }
    props.saveExpenses(expenseItem)
    updateTitle('')
    updateAmount('')
    updateDate('')
    updateLocation('')
   
  }
    
return (

    <form onSubmit={addItem}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={setTitle} onChange={changeTitle} />
      </div>
      <div className='new-expense__control'>
          <label>Location</label>
          <input type='text' value={setLocation} onChange={changeLocation}/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' value={setAmount} onChange={changeAmount} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' value={setDate} onChange={changeDate} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='button' onClick={props.onCancel}>Cancel</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>   
  
)
}
export default ExpenseForm