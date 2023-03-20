import React, { useState } from "react";

// dropdown menu component
function CategoryDropdown(props) {
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
    const newCategory = category.toUpperCase().trim();
    const arr = props.categories
    if (arr.includes(newCategory) || newCategory == "" || newCategory){
      alert("Category already in you categories or empty text")
      setCategory("")
    } else {
      // lift it up
      props.onAddCategory(newCategory.toUpperCase());
      // reset the category
      setCategory("")
    }
  }

  return (
    <>
    <label htmlFor="category-input">What will be the name for your new category: </label>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={addCategory}>Add New</button>
    {/* displays a dropdown menu, the default value will be the default value set with setCategories
    // per category in categories display it as an option */}
    <div>
      <select id="category-dropdown" defaultValue={props.categories[0]}>
      {props.categories.map((category) => (
      <option key={category} value={category}>{category}</option>))}
      </select>
    </div>
    </>
  );
}

export default CategoryDropdown;