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
          Email
          <input type="email" name="email" />
        </label>
        <button>Buy</button>
      </form>
    </section>
  );
}
