import { useState } from "react";
import React from "react";
// new expenses section component
function NewExpenses(props) {
  // set the useState for the ExpenseAmount
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [stepSize, setStepSize] = useState(1)

  // handle change of Expense to stop at 50,000
  function handleExpenseChange(event) {
    const expenseValue = event.target.value;
    const max = 50000;
    if (expenseValue <= max) {
      setExpenseAmount(expenseValue);
    }
  }

  // function to store the Expense if the ExpenseAmount is more than 0
  function handleAddExpense() {
    if (expenseAmount > 0) {
      // lift it up
      props.onStoreExpense(parseFloat(expenseAmount));
      // reset ExpenseAmount
      setExpenseAmount(0);
    }
  }

  function handleIncrement() {
    // handles the + button for increment
    const newExpenseAmount = parseFloat(expenseAmount) + stepSize;
    if (newExpenseAmount >= 0 & newExpenseAmount <= 50000) {
      setExpenseAmount(prevExpenseAmount => parseFloat(prevExpenseAmount) + stepSize);
    }
  }

  function handleDecrement() {
    // handles the + button for decrement
    const newExpenseAmount = parseFloat(expenseAmount) - stepSize;
    if (newExpenseAmount >= 0 & newExpenseAmount <= 50000) {
      setExpenseAmount(prevExpenseAmount => parseFloat(prevExpenseAmount) - stepSize);
    }
  }

  return (
    // displays a text an input box and the add new bttn
    <>
      <input className='input-box' type="number" value={expenseAmount} onChange={handleExpenseChange} step={stepSize}/>
      <button className="plus-minus" onClick={handleIncrement} disabled={expenseAmount == 50000}>+</button>
      <button className="plus-minus" onClick={handleDecrement} disabled={expenseAmount == 0}>-</button>
      <button className='addValue' onClick={handleAddExpense} disabled={expenseAmount <= 0}>Add Expense</button>
      <p>Current Expenses: {props.myExpenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      
    </>
  );
}

export default NewExpenses;