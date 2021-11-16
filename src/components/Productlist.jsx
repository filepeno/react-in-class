import Product from "./Product";

export default function ProdustList(props) {
  console.log(props);
  const productlist = props.products.map((product) => <Product {...product} />);
  return (
    <section className="ProductList">
      <h1>Products</h1>
      {productlist}
    </section>
  );
}
