import React from "react";
import "./NewsTeller.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function NewsTeller() {
  return (
    <div className="newsteller">
      <div className="newsteller-content">
        <span style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>
          NEWSLETTER
        </span>
        <span className="mb-3" style={{ fontSize: "30px" }}>
          Sign up for latest updates and offers
        </span>

        <div className="form ">
          <input
            type="text"
            placeholder="email address"
            style={{ width: "200px" }}
            className="me-3"
          />
          <button>Subscribe</button>
        </div>
        <div>will be used in accordance with our privacy policy</div>
        <div className="social-icon">
          <div className="icon">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagramSquare />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
