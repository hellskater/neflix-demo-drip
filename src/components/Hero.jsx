import React from "react";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <div
      id="hero"
      className="Hero"
      style={{
        backgroundImage: "url(https://images4.alphacoders.com/119/1194463.jpg)",
      }}
    >
      <div className="content">
        <img
          className="logo"
          src="https://arcane.com/static/arcane-logo-a-1-ff3091e021ded0fcd5528dd5b58683db.png"
          alt=""
        />
        <h2>Season 2 now available</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
        </p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="Watch now" />
          <HeroButton primary={false} text="+ My list" />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
