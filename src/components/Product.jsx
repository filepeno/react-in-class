// import addToCart from "./Basket";
import { useState } from "react";

export default function Product(props) {
  const initialAmount = 0;
  const [amount, changeAmount] = useState(initialAmount);

  function addToCart() {
    console.log("product added");
    changeAmount((prevAmount) => prevAmount + 1);
  }

  function removeFromCart() {
    console.log("product removed");
    changeAmount((prevAmount) => prevAmount - 1);
  }

  return (
    <article className={`Product ${props.soldOut ? "" : "soldOut"}`}>
      <h2 className="ProductName">{props.productdisplayname}</h2>
      <h3 className="Price">
        <span>{props.price}</span> dkk
      </h3>
      <h4 className={`SoldOutTag ${props.soldOut ? "hidden" : ""}`}>sold out</h4>
      <p className="Description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quas tenetur. Assumenda laboriosam, minima dignissimos quae sequi alias quidem voluptatem nemo. Aliquam quibusdam provident est aperiam debitis cum repudiandae obcaecati!
      </p>
      <div className="AddRemove">
        {" "}
        <button onClick={addToCart}>+</button>
        <div>{amount}</div>
        <button onClick={removeFromCart}>-</button>
      </div>
    </article>
  );
}
