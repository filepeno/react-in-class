import "./App.css";

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

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <NavLink />
          <NavLink />
          <NavLink />
          <NavLink />
        </ul>
      </nav>
    </header>
  );
}

function ProdustList(props) {
  return (
    <section className="ProductList">
      <h1>Products</h1>
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
      <Product {...props} />
    </section>
  );
}

function Product(props) {
  console.log(props);
  return (
    <article className="Product">
      <h2 className="ProductName">{props.product.productdisplayname}</h2>
      <h3 className="Price">
        <span>{props.product.price}</span> dkk
      </h3>
      <p className="Description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quas tenetur. Assumenda laboriosam, minima dignissimos quae sequi alias quidem voluptatem nemo. Aliquam quibusdam provident est aperiam debitis cum repudiandae obcaecati!
      </p>
    </article>
  );
}

function NavLink() {
  return (
    <li>
      <a href="/">Home</a>
    </li>
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
