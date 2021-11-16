import Product from "./Product";

export default function ProdustList(props) {
  console.log(props);
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
