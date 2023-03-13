import { useState } from "react";
import React from "react";
// new expenses section component
function NewExpenses(props) {
  // define the category useState for input change
  const [category, setCategory] = useState("");
  // set the useState for the ExpenseAmount
  const [expenseAmount, setExpenseAmount] = useState("");
  const [stepSize, setStepSize] = useState(1)

  // handle change of Expense to stop at 50,000
  function handleExpenseChange(event) {
    const expenseValue = event.target.value;
    const max = 50000;
    if (expenseValue <= max) {
      setExpenseAmount(expenseValue);
    } else {
      alert("The max is $50,000");
    }
  }

  // function to store the Expense if the ExpenseAmount is more than 0
  function handleAddExpense() {
    if (expenseAmount > 0) {
      // lift it up
      props.onStoreExpense(parseFloat(expenseAmount));
      // reset ExpenseAmount
      setExpenseAmount("");
    }
    else {
      // less than 0 reset ExpenseAmount
      alert("Can't add add 0 or less than 0 to your Expense, can you? That would be an expense. Just input a normal positive number o_o");
      setExpenseAmount("");
    }
  }

  function handleIncrement() {
    const newExpenseAmount = parseFloat(expenseAmount) + stepSize;
    if (newExpenseAmount >= 0 & newExpenseAmount <= 50000) {
      setExpenseAmount(prevExpenseAmount => parseFloat(prevExpenseAmount) + stepSize);
    }
  }

  function handleDecrement() {
    const newExpenseAmount = parseFloat(expenseAmount) - stepSize;
    if (newExpenseAmount >= 0 & newExpenseAmount <= 50000) {
      setExpenseAmount(prevExpenseAmount => parseFloat(prevExpenseAmount) - stepSize);
    }
  }

  // everytime a character changes in the input box handle input change
  function handleInputChange(event) {
    // setCategory to the value inputed during the event
    setCategory(event.target.value);
  }

  // add a new category to options on click Add New
  function addCategory() {
    // set the category to a var to manipulate it
    const newCategory = category;
    // lift it up
    props.onAddCategory(newCategory);
    // reset the category
    setCategory("")
  }

  return (
    // displays a text an input box and the add new bttn
    <>
      <input className='input-box' type="number" value={expenseAmount} onChange={handleExpenseChange} step={stepSize}/>
      <button className="plus-minus" onClick={handleIncrement} disabled={expenseAmount == 50000}>+</button>
      <button className="plus-minus" onClick={handleDecrement} disabled={expenseAmount == 0}>-</button>
      <button className='addValue' onClick={handleAddExpense} disabled={expenseAmount <= 0}>Add Expense</button>
      <p>Current Expenses: {props.myExpenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <label htmlFor="category-input">What will be the name for your new category: </label>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={addCategory}>Add New</button>
    </>
  );
}

export default NewExpenses;