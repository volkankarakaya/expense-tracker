import Card from "../UI/Card";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={filterChangeHandler} />

      {props.items.map(item => (
        <ExpenseItem title ={item.title} amount={item.amount} date={item.date}/>
      ))}
        
      </Card>
    </div>
  );
}

export default Expenses;
