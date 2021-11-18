import "./App.css";
import Header from "./components/Header";
import ProdustList from "./components/Productlist";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState(5);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products?limit=" + articles);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, [articles]);

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
      <button onClick={() => setArticles(10)}>Load 10 products</button>
      <button onClick={() => setArticles(20)}>Load 20 products</button>
      <ProdustList products={products} addToBasketFunction={addToBasket} />
      <Basket basket={basket} />
    </main>
  );
}

export default App;
