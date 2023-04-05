import React from "react";

const RemoveCategory = (props) => {
  function handleDeleteCategory(index){

  }

  return (
    <>
    <div>
      <button>Remove Category</button>
      <div className="remove-choices">
        {props.categories.slice(1,).map((category,index) => (
        <div className="cat-rem">
          <p key={category}>{category}</p>
          <button onClick={() => handleDeleteCategory(index)}>X</button>
        </div>))}
      </div>
    </div>
    </>
  );
}

export default RemoveCategory;