import React from "react";
import {useGlobalContext} from './context';

const CartItem = ({id,img,title,price,amount}) => {
  const { remove,increase,decrease,toggleAmount } = useGlobalContext()
  return (
    <section className="cart-item">
      <div className="">
          <h4>{title}</h4>
          <h4 className="">{price}</h4>
          <img src={img}/>
      </div>
      <button className="btn" onClick={() => remove(id)}>remove</button>
      <button className="btn" onClick={() => toggleAmount(id,'inc')}>Increase</button>
      <button className="btn" onClick={() => toggleAmount(id,'dec')}>Decrease</button>

      
    </section>
  );
}

export default CartItem;
