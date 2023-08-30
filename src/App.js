import React, { useState } from 'react';
import NewExpense from './components/newExpense/NewExpense';
import './App.css';
import ExpenseItem from './components/ExpenseItem'


const dummy_data = [
  {
    id: 1,
    item:"Partying",
    location:"Bangalore",
    amount: "₹1000",
    date: new Date(2022,8,15)
  }
]

function App() {

  const [addedData, setData] = useState(dummy_data)

  const newExpense = (expense) =>{
    console.log(expense)
      setData((prevExpense)=>{
        return [expense,...prevExpense]
      })
  }



  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      
      <NewExpense enterNewExpense={newExpense}></NewExpense>
      
      <ExpenseItem expense = {addedData}
   />
    </div>
  );
}

export default App;
