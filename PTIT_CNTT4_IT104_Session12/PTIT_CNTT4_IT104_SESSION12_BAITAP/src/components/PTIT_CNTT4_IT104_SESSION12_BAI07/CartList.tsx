import React from "react";
import Cart from "./Cart";

const CartList: React.FC = () => {
  return (
    <main className="cart-list">
      {Array.from({ length: 12 }).map((_, i) => (
        <Cart key={i} />
      ))}
    </main>
  );
};

export default CartList;
