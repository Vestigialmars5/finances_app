import React from "react";

// dropdown menu component
function CategoryDropdown(props) {
  return (
    // displays a dropdown menu, the default value will be the default value set with setCategories
    // per category in categories display it as an option
    <select id="category-dropdown" defaultValue={props.categories[0]}>
      {props.categories.map((category) => (
      <option key={category} value={category}>{category}</option>))}
    </select>
  );
}

export default CategoryDropdown;