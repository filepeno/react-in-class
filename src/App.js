import "./App.css";
import Header from "./components/Header";
import ProdustList from "./components/Productlist";
import { useState } from "react";

function App() {
  const [productsData, setProducts] = useState([
    {
      id: 1163,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Summer",
      productionyear: 2011,
      usagetype: "Sports",
      productdisplayname: "Sahara Team India Fanwear Round Neck Jersey",
      price: 895,
      discount: null,
      brandname: "Nike",
      soldout: 0,
    },
    {
      id: 1164,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Winter",
      productionyear: 2015,
      usagetype: "Sports",
      productdisplayname: "Blue T20 Indian Cricket Jersey",
      price: 1595,
      discount: 28,
      brandname: "Nike",
      soldout: 1,
    },
    {
      id: 1165,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Summer",
      productionyear: 2013,
      usagetype: "Sports",
      productdisplayname: "Mean Team India Cricket Jersey",
      price: 2495,
      discount: 45,
      brandname: "Nike",
      soldout: 0,
    },
    {
      id: 1525,
      gender: "Unisex",
      category: "Accessories",
      subcategory: "Bags",
      articletype: "Backpacks",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Deck Navy Blue Backpack",
      price: 1299,
      discount: 55,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1526,
      gender: "Unisex",
      category: "Accessories",
      subcategory: "Bags",
      articletype: "Backpacks",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Big Cat Backpack Black",
      price: 1299,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1528,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Jackets",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Black Fleece Jacket",
      price: 3999,
      discount: 49,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1529,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Tee",
      price: 1899,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1530,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Jackets",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Sports",
      productdisplayname: "Track Jacket",
      price: 4299,
      discount: 57,
      brandname: "Puma",
      soldout: 1,
    },
    {
      id: 1531,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Grey Solid Round Neck T-Shirt",
      price: 799,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
    {
      id: 1532,
      gender: "Men",
      category: "Apparel",
      subcategory: "Topwear",
      articletype: "Tshirts",
      season: "Fall",
      productionyear: 2010,
      usagetype: "Casual",
      productdisplayname: "Grey Leaping Cat T-shirt",
      price: 899,
      discount: null,
      brandname: "Puma",
      soldout: 0,
    },
  ]);
  const addProduct = () => {
    setProducts((prevState) =>
      prevState.concat({
        productdisplayname: "Peter",
        price: 666,
        soldout: 1,
      })
    );
  };
  console.log(productsData);
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    console.log("add to basket");
    setBasket((oldBasket) => oldBasket.concat({ product }));
  }
  return (
    <main>
      <Header />
      <button onClick={addProduct}>Add product</button>
      <ProdustList products={productsData} addToBasketFunction={addToBasket} />
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
        <li>
          <span></span>DKK
        </li>
      </ul>
    </section>
  );
}

export default App;
