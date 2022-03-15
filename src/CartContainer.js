import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

function CartContainer() {
  const { cart, clearCart, total } = useGlobalContext();
  if(cart.length === 0){
    return(
      <section className="container">
        <div className="card flex">
          <h2 class="btn">Your bag,is currently empty now</h2>
        </div>

      </section>
    )
  }
  return (
    <section className="cart-container">
      <div className="container">
        <div className="cart-wrap card">
          <h3>My Cart</h3>
          {cart.map((carty) => {
            return <CartItem key={carty.id} {...carty} />;
          })}
          <p>Total Amount : ${total} </p>
          <button className="btn" onClick={clearCart}>
            clear chart
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartContainer;
