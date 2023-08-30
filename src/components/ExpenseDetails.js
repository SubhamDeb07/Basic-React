import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseDetails.css'
import Card from './UI/card'
function ExpenseDetails(props){
    
    return (
        <Card className='expense-item'>
        
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
        <h2>{props.item}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">{props.amount}</div>
       
    </div>
    </Card>
    
    
    )
}

export default ExpenseDetails