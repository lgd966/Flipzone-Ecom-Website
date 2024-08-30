import React, { useContext } from "react";
import "./CartItem.css";
import { BsCartX } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { Context } from "../../utils/AppContext";

 function CartItem() {
  const { cartItem, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="cart-products">
      {cartItem.length === 0 ? (
        <div className="empty-cart">
          <BsCartX size={64} />
          <p>Your cart is empty</p>
        </div>
      ) : (
        cartItem.map((item) => {
          const imageUrl = item?.img?.data?.[0]?.attributes?.url
            ? `${import.meta.env.VITE_DEV_URL}${
                item.img.data[0].attributes.url
              }`
            : null;

          console.log("Image URL:", imageUrl);

          return (
            <div key={item.id} className="cart-product">
              <div className="image-container">
                {imageUrl ? (
                  <img src={imageUrl} alt={item.attributes.title} />
                ) : (
                  <div
                    style={{
                      height: "4rem",
                      width: "4rem",
                      backgroundColor: "#ccc",
                      fontSize: "12px",
                    }}
                  >
                    Image not available
                  </div>
                )}
              </div>
              <div className="product-detail">
                <span className="name">
                  {item.attributes.title}
                  <IoCloseSharp
                    className="close-btn"
                    onClick={() => handleRemoveFromCart(item)}
                  />
                </span>
                <div className="quantity-btn mb-2">
                  <span
                    className="border px-3 py-1"
                    onClick={() => handleCartProductQuantity("dec", item)}
                  >
                    -
                  </span>
                  <span className="border px-3 py-1">
                    {item.attributes.quantity}
                  </span>
                  <span
                    className="border px-3 py-1"
                    onClick={() => handleCartProductQuantity("inc", item)}
                  >
                    +
                  </span>
                </div>
                <div className="textno">
                  <span>{item.attributes.quantity}</span>
                  <span>X</span>
                  <span className="highlight">
                    &#8377;
                    {item.attributes.price * item.attributes.quantity}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}


export default CartItem