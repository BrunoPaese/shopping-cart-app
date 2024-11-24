import React, { useState } from "react";
import QRCodeScanner from "./teste";

const ProductForm = ({ onAddItem }) => {
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {
    if (code && quantity) {
      onAddItem({ code, quantity: parseInt(quantity, 10) });
      setCode("");
      setQuantity("");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div>
      <div>
        <label>Código do Produto:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <QRCodeScanner onScan={(scannedCode) => setCode(scannedCode)} />
      </div>
      <div>
        <label>Quantidade:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAdd}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductForm;
