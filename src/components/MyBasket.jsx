export default function MyBasket(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.product.price;
  }, initialValue);

  console.log(sum);
  console.log(props.basket);
  return (
    <section className={`MyBasket ${props.basket.length === 0 ? "hidden" : ""}`}>
      <h1>Basket</h1>
      <ul>
        <li>
          You have <span>{props.basket.length}</span> items in the basket
        </li>
        <li>
          <span>Total: {sum} </span>DKK
        </li>
      </ul>
    </section>
  );
}
