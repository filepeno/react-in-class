import MyBasket from "./MyBasket";

export default function Basket(props) {
  return (
    <aside className="Basket">
      <MyBasket basket={props.basket} />
      <form className="CheckoutForm"></form>
    </aside>
  );
}
