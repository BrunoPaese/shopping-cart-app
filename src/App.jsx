import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe o Router
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import Cart from "./components/Cart";
import Contributors from "./components/Contributors"; // Importe o novo componente de integrantes

const App = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductForm onAddItem={addItemToCart} />} />
          <Route path="/cart" element={<Cart items={cart} />} />
          <Route path="/contributors" element={<Contributors />} /> {/* Nova rota */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
