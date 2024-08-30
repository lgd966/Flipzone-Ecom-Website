import React from "react";
import Banner from "../Banner/Banner";
import CatagoryHome from "../CatagoryHome/CatagoryHome";
import Products from "../Product/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/Api";
import { Context } from "../../utils/AppContext";

function Home() {
  const { catagories, setcatagories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCatagories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  const getCatagories = () => {
    fetchDataFromApi("/api/catagories?populate=*").then((res) => {
      console.log(res);
      setcatagories(res);
    });
  };

  return (
    <>
      <div>
        <div className="main-content">
          <Banner />
          <div className="layout">
            <CatagoryHome catagories={catagories} />
            <Products products={products} headingtext="Popular Products" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
