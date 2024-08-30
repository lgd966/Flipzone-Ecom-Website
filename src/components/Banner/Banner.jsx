import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="hero-banner">
      <div className="flex">
        <div className="">
          <h1 style={{ fontSize: "4rem" }}>Sale</h1>
          <p style={{ fontSize: "" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro{" "}
            <br />
            excepturi impedit dignissimos et unde voluptatibus illum, tenetur{" "}
            <br />
            reprehenderit saepe magnam sit quidem. Cumque odio, adipisci <br />
            doloremque assumenda iste voluptate non?
          </p>
          <div>
            <button className="banner-btn">Read More</button>
            <button className="banner-btn">Shop Now</button>
          </div>
        </div>
        <div className="bannerimg">
          <img src="BannerImg.jpeg" className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
