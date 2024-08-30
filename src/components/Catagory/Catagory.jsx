import React from "react";
import { useParams } from "react-router-dom";
// import Products from "../Products";
import Products from "../Product/Products";
import useFetch from "../../Hooks/UseFetch";
import "./Catagory.css";

export default function Catagory() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=${id}`
  );

  return (
    <div>
      <div className="layout">
        <div className="cat-title fs-2 mx-5">
          {
            data?.data?.[0]?.attributes?.catagories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products innerPage={true} categoryId={id} products={data} />
      </div>
    </div>
  );
}
