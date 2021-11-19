export default function CheckoutForm(props) {
  return (
    <section>
      <h3>Checkout</h3>
      <form className={`CheckoutForm ${props.basket.length === 0 ? "hidden" : ""}`}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Credit card
          <input type="text" name="cc" />
        </label>
        <button>Buy</button>
      </form>
    </section>
  );
}
