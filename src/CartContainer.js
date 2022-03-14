import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

function CartContainer() {
  const { cart, clearCart, total } = useGlobalContext();
  return (
    <section className="cart-container">
      <div className="container">
        <div className="cart-wrap card">
          <h4>YOUR BAG</h4>
          {cart.map((carty) => {
            return (
                <CartItem key={carty.id} {...carty}/> 
            );
          })}
          <p>Total Amount : {total} </p>
          <button className="btn" onClick={clearCart}>clear chart</button>
        </div>
      </div>
    </section>
  );
}

export default CartContainer;
