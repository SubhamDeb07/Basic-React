import React, {useState} from 'react'
import './ExpenseDetails.css'
function ExpenseDetails(props){
    const [item,setTitle] = useState(props.item)
    const [amount,setAmount] = useState(props.amount)
    const clickHandler = () =>{
        setTitle('Updated')
        setAmount('100$')
    }
    return (
        <div className="expense-item__description">
        <h2>{item}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={clickHandler}>Edit</button>
    </div>
    
    
    )
}

export default ExpenseDetails