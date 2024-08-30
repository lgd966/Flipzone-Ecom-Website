import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import useFetch from "../../Hooks/UseFetch";
import "./Search.css";

 function Search({ setShowSearch }) {
  const [query, setQuery] = useState("");
  const Navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }
  return (
    <div className="search-model">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="search any product"
          onChange={onChange}
          value={query}
        />
        <IoCloseSharp onClick={() => setShowSearch(false)} />
      </div>
      <div className="serach-result-content ">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item d-flex align-items-center"
              onClick={() => {
                Navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={
                    item.attributes.img?.data?.[0]?.attributes?.url
                      ? `${import.meta.env.VITE_DEV_URL}${
                          item.attributes.img.data[0].attributes.url
                        }`
                      : "path/to/default/image.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="prod-detail">
                <span className="name ">{item.attributes.title}</span>
                <span className="desc">{item.attributes.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search