import "./App.css";
import Header from "./components/Header";
import ProdustList from "./components/Productlist";

function App() {
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: 0,
  };
  const basket = [1, 2, 3];
  return (
    <main>
      <Header />
      <ProdustList product={product} />
      <Basket {...[basket]} />
    </main>
  );
}

function Basket(props) {
  console.log(props);
  return (
    <aside className="Basket">
      <MyBasket {...props} />
      <form className="CheckoutForm"></form>
    </aside>
  );
}

function MyBasket(props) {
  return (
    <section className="MyBasket">
      <h1>Basket</h1>
      <ul>
        <li>
          You have <span>{props[0].length}</span> items in the basket
        </li>
        <li>Price</li>
      </ul>
    </section>
  );
}

export default App;
