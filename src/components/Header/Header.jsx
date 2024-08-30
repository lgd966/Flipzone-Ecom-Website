import React from "react";
import Search from "../SearchIcon/SearchIcon";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { Context } from "../../utils/AppContext";
import { useEffect, useState, useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.css";

 function Header() {
  const [scroll, setScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${scroll ? "sticky-header" : ""}`}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5 ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
              Flipzone
            </Link>

            <span className="ms-auto">
              <IoSearchSharp onClick={() => setShowSearch(true)} />
            </span>
            <span className="ms-3" style={{ fontSize: "24px" }}>
              <AiOutlineHeart />
            </span>

            <span
              className="ms-3 me-5 cart-icon"
              style={{ fontSize: "24px" }}
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </nav>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
}

export default Header