import React from "react";
import Product from "./Product";
import "./Product.css";

export default function Products({
  innerPage,
  categoryId,
  products,
  headingtext,
}) {
  const productData = products?.data || [];

  return (
    <div className="product-container mx-5">
      {!innerPage && (
        <div className="sec-heading">
          <h1> {headingtext}</h1>
        </div>
      )}
      <div className="products">
        {productData.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
}
