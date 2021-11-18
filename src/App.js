import "./App.css";
import Header from "./components/Header";
import ProdustList from "./components/Productlist";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  const addProduct = () => {
    setProducts((prevState) =>
      prevState.concat({
        productdisplayname: "Peter",
        price: 666,
        soldout: 1,
      })
    );
  };
  console.log(products);
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    console.log("add to basket");
    setBasket((oldBasket) => oldBasket.concat({ product }));
  }
  return (
    <main>
      <Header />
      <button onClick={addProduct}>Add product</button>
      <ProdustList products={products} addToBasketFunction={addToBasket} />
      <Basket basket={basket} />
    </main>
  );
}

export default App;
