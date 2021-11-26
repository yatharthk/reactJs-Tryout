import {useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css' ;


function ExpenseItem(props){
const [title,setTitle]= useState(props.title);
const amount= props.amount;
const date= props.date;
console.log(props);

var changeTitle=()=>{
    let title="updatedTitle";
    setTitle(title);
}

return(
    <Card className="expense-item">
    <ExpenseDate date={date}/>
    <div className="expense-item__description">
    <h2>{title}</h2>
    <div className="expense-item__price">${amount}</div>
    <button className="btn" onClick={changeTitle}>change Title</button>
    </div>
    </Card>
);
};

export default ExpenseItem;