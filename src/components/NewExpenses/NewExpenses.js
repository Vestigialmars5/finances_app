import { useState } from "react";
import React from "react";
// new expenses section component
function NewExpenses(props) {
  // define the category useState for input change
  const [category, setCategory] = useState("");

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
      <label htmlFor="category-input">What will be the name for your new category: </label>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={addCategory}>Add New</button>
    </>
  );
}

export default NewExpenses;