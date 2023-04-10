import { useState } from "react";
import React from "react";

// new income section component
function NewIncome(props) {
  // set the useState for the incomeAmount
  // i need to do something with the stepsize
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [stepSize, setStepSize] = useState(1)

  // handle change of income to stop at 10,000
  function handleIncomeChange(event) {
    const incomeValue = event.target.value;
    const max = 50000;
    if (incomeValue <= max) {
      setIncomeAmount(incomeValue);
    }
  }

  // function to store the income if the incomeAmount is more than 0
  function handleAddIncome() {
    if (incomeAmount > 0) {
      // lift it up
      props.onStoreIncome(parseFloat(incomeAmount));
      // reset incomeAmount
      setIncomeAmount(0);
    }
  }

  function handleIncrement() {
    const newIncomeAmount = parseFloat(incomeAmount) + stepSize;
    if (newIncomeAmount >= 0 & newIncomeAmount <= 50000) {
      setIncomeAmount(prevIncomeAmount => parseFloat(prevIncomeAmount) + stepSize);
    }
  }

  function handleDecrement() {
    const newIncomeAmount = parseFloat(incomeAmount) - stepSize;
    if (newIncomeAmount >= 0 & newIncomeAmount <= 50000) {
      setIncomeAmount(prevIncomeAmount => parseFloat(prevIncomeAmount) - stepSize);
    }
  }

  return (
    <>
      <input className='input-box' type="number" value={incomeAmount} onChange={handleIncomeChange} step={stepSize}/>
      <button className="plus-minus" onClick={handleIncrement} disabled={incomeAmount == 50000}>+</button>
      <button className="plus-minus" onClick={handleDecrement} disabled={incomeAmount == 0}>-</button>
      <button className='addIncome' onClick={handleAddIncome} disabled={incomeAmount <= 0}>Add Income</button>
      <p>Current Income: {props.myIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>

    </>
  );
}

export default NewIncome;