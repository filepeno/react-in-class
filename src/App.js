import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <ProdustList />
      <Basket />
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

function ProdustList() {
  return (
    <section className="ProductList">
      <h1>Products</h1>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
}

function Product() {
  return (
    <article className="Product">
      <h2 className="ProductName">Product</h2>
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

function Basket() {
  return (
    <aside className="Basket">
      <section className="MyBasket">
        <h1>Basket</h1>
        <ul>
          <li>Total items</li>
          <li>Price</li>
        </ul>
      </section>
      <form className="CheckoutForm"></form>
    </aside>
  );
}

export default App;
