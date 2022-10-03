import React from "react";

const HeroButton = ({ primary, text }) => {
  return (
    <a href="#" className="Button" data-primary={primary}>
      {text}
    </a>
  );
};

export default HeroButton;
