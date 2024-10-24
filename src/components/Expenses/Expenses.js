import "./Expenses.css"
import ExpenseItem from "./ExpenseItem.js"
import Card from "../UI/Card.js";
const Expenses =({expenses})=>{
  return (<Card className="expenses">
  {expenses.map((expense, index) => {
        return (
            <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
})}
</Card>)

}

export default Expenses;