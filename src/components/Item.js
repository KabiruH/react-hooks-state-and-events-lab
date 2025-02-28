import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  const handleClick = (event) => {
    setInCart(current => !current);
  };


  return (
     
    <li className={ inCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
