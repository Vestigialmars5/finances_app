import { useState } from "react";
import React from "react";

// new income section component
function NewIncome(props) {
  // set the useState for the incomeAmount
  const [incomeAmount, setIncomeAmount] = useState("");

  // function to store the income if the incomeAmount is more than 0
  function handleStoringIncome() {
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
      <input className='input-box' type="number" value={incomeAmount} onChange={e => setIncomeAmount(e.target.value)} />
      <button className="plus-minus">+</button>
      <button className="plus-minus">-</button>
      <button className='addIncome' onClick={handleStoringIncome}>Add Income</button>
      <p>Current income: ${props.myIncome}</p>
    </>
  );
}

export default NewIncome;