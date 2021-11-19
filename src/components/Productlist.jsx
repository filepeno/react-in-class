import Product from "./Product";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useState } from "react";
export default function ProdustList(props) {
  let [loading, setLoading] = useState(true);

  console.log(props);
  const productlist = props.products.map((product) => <Product {...product} key={product.id} {...props} />);
  return (
    <section className="ProductList">
      <h1>Products</h1>
      <PacmanLoader color="blue" loading={loading} size={25} />
      {productlist}
    </section>
  );
}
