import { useState } from "react";
import React from "react";

// new income section component
function NewIncome(props) {
  // set the useState for the incomeAmount
  const [incomeAmount, setIncomeAmount] = useState("");

  // handle change of income to stop at 10,000
  function handleIncomeChange(event) {
    const incomeValue = event.target.value;
    const max = 50000;
    if (incomeValue <= max) {
      setIncomeAmount(incomeValue)
    } else {
      alert("The max is $50,000")
    }
  }

  // function to store the income if the incomeAmount is more than 0
  function handleAddIncome() {
    if (incomeAmount > 0) {
      // lift it up
      props.onStoreIncome(parseFloat(incomeAmount));
      // reset incomeAmount
      setIncomeAmount("");
    }
    else {
      // less than 0 reset incomeAmount
      alert("Can't add add 0 or less than 0 to your income, can you? That would be an expense. Just input a normal positive number o_o")
      setIncomeAmount("");
    }
  }

  return (
    <>
      <input className='input-box' type="number" value={incomeAmount} onChange={handleIncomeChange} />
      <button className="plus-minus">+</button>
      <button className="plus-minus">-</button>
      <button className='addIncome' onClick={handleAddIncome} disabled={incomeAmount <= 0}>Add Income</button>
      <p>Current income: {props.myIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>

    </>
  );
}

export default NewIncome;