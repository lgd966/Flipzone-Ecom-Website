import React from "react";
import { useNavigate } from "react-router-dom";
import "./CatagoryHome.css";

function CategoryHome({ catagories = { data: [] } }) {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-between category my-5 mx-4">
      {catagories?.data?.map((item) => (
        <div
          key={item.id}
          style={{ width: "20rem" }}
          onClick={() => navigate(`/catagory/${item.id}`)}
        >
          <img
            src={`${import.meta.env.VITE_DEV_URL}${
              item.attributes.img.data.attributes.url
            }`}
            className="card-img-top catagory-home"
            style={{ cursor: "pointer" }}
            alt="Category"
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryHome;
