import React from "react";
import Products from "../Product/Products";
import useFetch from "../../Hooks/UseFetch";

 function ReletedProduct({ productId, catagoryId }) {
  const { data } = useFetch(
    `/api/products/?populate=*&filters[id][$ne]=${productId}&filters[catagories][id]=${catagoryId}&pagination[start]=0&pagination[limit]=3`
  );
  return (
    <div className="related-product mt-5">
      <Products headingtext="Related Products" products={data} />
    </div>
  );
}

export default ReletedProduct