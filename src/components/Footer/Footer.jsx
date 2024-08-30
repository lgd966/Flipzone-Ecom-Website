import React from "react";
import "./Footer.css";

 function Footer() {
  return (
    <div className="px-5 py-5 footer">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          F<h3>About</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            harum aspernatur architecto. Voluptatum et eum placeat voluptas
            quae.
          </p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h3>Contact</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>+91 757953695</li>
            <li>Email.com</li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 pages">
          <h3>Catagories</h3>
          <ul>
            <li>Headphones</li>
            <li>Smart Watches</li>
            <li>Bluetooth speakers</li>
            <li>Wireless Earbuds</li>
            <li>Home theatre</li>
            <li>Projectors</li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 pages">
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Privacy policy</li>
            <li>Returns</li>
            <li>Terms & conditions</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer