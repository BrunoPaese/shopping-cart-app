import React, { useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <Header />
      <ProductForm onAddItem={addItemToCart} />
      <Cart items={cart} />
    </div>
  );
};

export default App;
