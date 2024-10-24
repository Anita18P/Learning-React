import React,{useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js"

const ExpenseItem=(props) =>{
  const [title,setTitle]=useState(props.title);
  function buttonClickHandler(event){
    setTitle('New Title');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;