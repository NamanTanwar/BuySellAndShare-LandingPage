import React from "react";

const Button = ({
  text,
  className = "",
  bgColor = "cream",
  textColor = "navy",
}) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} font-cursive font-bold py-2 px-4 rounded-full hover:bg-white hover:text-navy transition duration-300 mr-2 mb-2 lg:mb-0 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
