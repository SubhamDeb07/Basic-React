import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart'
import ExpenseDetails from './ExpenseDetails'
import Card from './UI/card'

import './ExpenseItem.css'

function ExpenseItem(props){
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    const filteredExpense = props.expense.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear
    })

    let showExpenses = <p>No Expense Found!</p>
    if(filteredExpense.length>0){
        showExpenses = filteredExpense.map((expense) => (
            <ExpenseDetails
              key={expense.id}
              item={expense.item}
              location={expense.location}
              amount={expense.amount}
              date={expense.date}
            />
          ))
    }
    
    return (
        <div>
          <Card className='expenses'>
            <ExpensesFilter
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />
           <ExpensesChart expenses={filteredExpense}/>
            {showExpenses}
          </Card>
        </div>
      );
}
export default ExpenseItem 