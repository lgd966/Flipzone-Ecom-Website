import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { Context } from "../../utils/AppContext";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  return (
    <>
      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping cart</span>
            <span className="close-btn" onClick={() => setShowCart(false)}>
              <IoCloseOutline />
              <span className="text"></span>
            </span>
          </div>

          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="check btn btn-success mt-2">Checkout</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Cart;
