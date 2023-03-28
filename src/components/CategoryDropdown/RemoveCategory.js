import React from "react";

const RemoveCategory = (props) => {
  console.log(props.categories)
  return (
    <>
    <div>
      <button>Remove Category</button>
      <div>
        {props.categories.map((category) => (<p key={category}>{category}</p>))}
        <button>X</button>
      </div>
    </div>
    </>
  );
}

export default RemoveCategory;