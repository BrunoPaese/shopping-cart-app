import React, { useState } from "react";
import { Link } from "react-router-dom";
import QRCodeScanner from "./QRCodeScanner";
import "./ProductForm.css";

const ProductForm = ({ onAddItem }) => {
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cart, setCart] = useState([]);

  const phoneNumber = "5554999999999";

  const handleAdd = () => {
    if (code && quantity) {
      const newItem = { code, quantity: parseInt(quantity, 10) };
      setCart([...cart, newItem]);
      onAddItem(newItem);
      setCode("");
      setQuantity("");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) {
      alert("O carrinho está vazio!");
      return;
    }

    const message = cart
      .map((item, index) => `${index + 1}. Código: ${item.code}, Quantidade: ${item.quantity}`)
      .join("\n");

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Itens do Carrinho:\n${message}`
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="product-form">
      <div className="input-group">
        <label>Código do Produto:</label>
        <input
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <QRCodeScanner onScan={(scannedCode) => setCode(scannedCode)} />
      </div>
      <div className="input-group">
        <label>Quantidade:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={handleAdd} className="btn">
          <i className="fas fa-cart-plus"></i> Adicionar ao Carrinho
        </button>
        <button onClick={handleSendToWhatsApp} className="btn whatsapp-btn">
          <i className="fab fa-whatsapp"></i> Enviar para WhatsApp
        </button>
      </div>
      <Link to="/contributors">
        <button className="btn">Integrantes</button>
      </Link>
    </div>
  );
};

export default ProductForm;
