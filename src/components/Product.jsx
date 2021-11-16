// import addToCart from "./Basket";
import { useState } from "react";

export default function Product(props) {
  // const initialAmount = 0;
  const [amount, changeAmount] = useState(0);

  function addToCart() {
    console.log("product added");
    changeAmount((prevAmount) => prevAmount + 1);
  }

  function removeFromCart() {
    if (amount > 0) {
      console.log("product removed");
      changeAmount((prevAmount) => prevAmount - 1);
    }
  }

  return (
    <article className={`Product ${props.soldout ? "soldout" : ""}`}>
      <h2 className="ProductName">{props.productdisplayname}</h2>
      <h3 className="Price">
        <span>{props.price}</span> dkk
      </h3>
      <h4 className={`SoldOutTag ${props.soldout ? "" : "hidden"}`}>sold out</h4>

      <div className="AddRemove">
        {" "}
        <button onClick={addToCart}>+</button>
        <div>{amount}</div>
        <button onClick={removeFromCart}>-</button>
      </div>
    </article>
  );
}
