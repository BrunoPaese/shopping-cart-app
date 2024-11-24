import React from "react";

const Cart = ({ items }) => (
  <div>
    <h2>Carrinho</h2>
    {items.length === 0 ? (
      <p>O carrinho está vazio.</p>
    ) : (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Código: {item.code}, Quantidade: {item.quantity}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
