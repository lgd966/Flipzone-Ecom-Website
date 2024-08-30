import { useNavigate } from "react-router-dom";
import React from "react";
import image from "../../../public/pro1.jpeg"; 

 function Product({ id, data }) {
  const navigate = useNavigate();
  return (
    <div className="">
      <div
        className="card"
        style={{ width: "18rem" }}
        onClick={() => navigate("/product/" + id)}
      >
        <img
          src={
            data?.img?.data?.[0]?.attributes?.url
              ? import.meta.env.VITE_DEV_URL + data.img.data[0].attributes.url
              : image 
          }
          className="card-img-top"
          alt={data?.name || "Product image"}
        />
        <div className="card-body">
          <h5 className="card-title">{data?.title || "Product Name"}</h5>
          <p className="card-text">
            &#8377;{data?.price || "Price not available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product