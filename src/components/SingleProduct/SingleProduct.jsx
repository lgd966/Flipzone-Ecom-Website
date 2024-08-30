import { useContext, useState } from "react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import ReletedProduct from "../RelatesdProduct/RelatedProduct";
import "./SingleProduct.css";
import useFetch from "../../Hooks/UseFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/AppContext";

 function Singleproduct() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&filters[id]=${id}`);

  const { handleAddToCart } = useContext(Context);

  const increament = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decreament = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return <div>Loading...</div>;

  const product = data.data?.[0]?.attributes;

  if (!product) return <div>Product not found.</div>;

  const imageUrl = product.img?.data?.[0]?.attributes?.url
    ? `${import.meta.env.VITE_DEV_URL}${product.img.data[0].attributes.url}`
    : image;

  return (
    <div>
      <div className="layout container mt-3">
        <div className="single-product-div row align-items-center">
          <div className="left col-lg-6 col-m-12">
            <img
              src={imageUrl}
              className="img-fluid"
              alt={product.title || "Product image"}
            />
          </div>
          <div className="right col-lg-6 col-m-12">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4 className="mb-3">   &#8377; {product.price}</h4>


            <div className="cart-btn">
              <div className="quantity-btn mb-3">
                <span className="border px-3 py-1" onClick={decreament}>
                  -
                </span>
                <span className="border px-3 py-1">{quantity}</span>
                <span className="border px-3 py-1" onClick={increament}>
                  +
                </span>
              </div>
              <button
                className="add-to-cart btn btn-primary mb-3"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                }}
              >
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>

            <div className="info-item mt-3">
              <span className="text-bold">
                Category:{" "}
                <span>{product.catagories.data[0].attributes.title}</span>
              </span>
              <div className="mt-3">
                <span>
                  Share:
                  <span className="social-icons">
                    <FaFacebookF
                      style={{ fontSize: "20px" }}
                      className="me-1"
                    />
                    <FaTwitter style={{ fontSize: "20px" }} className="me-1" />
                    <FaInstagramSquare
                      style={{ fontSize: "20px" }}
                      className="me-1"
                    />
                    <FaLinkedin style={{ fontSize: "24px" }} />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <ReletedProduct
          productId={id}
          catagoryId={product.catagories.data[0].id}
        />
      </div>
    </div>
  );
}

export default Singleproduct