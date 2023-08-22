import NewExpense from './components/newExpense/NewExpense';
import './App.css';
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expense = [
    {
      item:"Partying",
      location:"Bangalore",
      amount: "₹1000",
      date: new Date(2023,8,15)
    }
  ]

  const expenseItem = []

  for(let i = 0;i<4;i++){
     expenseItem.push(
      <ExpenseItem
   
      item = {expense[0].item}
      location = {expense[0].location}
      amount = {expense[0].amount}
      date = {expense[0].date}
      />
     )
  }
  return (
    <div className="App">
      <h2>Hello React</h2>
      <NewExpense></NewExpense>
     {expenseItem}
    </div>
  );
}

export default App;
