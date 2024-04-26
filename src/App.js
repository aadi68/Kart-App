// import React from 'react'
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componenets/Navbar";
import ProductList from "./componenets/ProductList";
import Footer from "./componenets/Footer";
import React, { useState } from "react";
import AddItem from "./componenets/AddItem";

function App() {
  const [productList, setproductList] = useState([
    {
      price: 149999,
      name: "iPhone 15Pro",
      quantity: 0,
    },
    {
      price: 15999,
      name: "Samsung A51s",
      quantity: 0,
    },
  ]);
  let [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    settotalAmount(newTotalAmount);
    setproductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity !== 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
      settotalAmount(newTotalAmount);
      setproductList(newProductList);
    }
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setproductList(newProductList);
    settotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setproductList(newProductList);
    settotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setproductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
