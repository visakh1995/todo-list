import React from "react";
import { useGlobalContext } from "./context";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <section className="cart-item">
      <div className="grids">
        <div className="cart-image">
          <img src={img} />
        </div>
        <div className="cart-detail">
          <p>{title}</p>
          <p className="price">${price}</p>
          <p className="remove" onClick={() => remove(id)}>
            remove
          </p>
        </div>
        <div className="regularise">
          <button className="inc" onClick={() => toggleAmount(id, "inc")}>
            <FaChevronCircleUp />
          </button>
          <button className="dec" onClick={() => toggleAmount(id, "dec")}>
            <FaChevronCircleDown />
          </button>
          <p>{amount}</p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default CartItem;
