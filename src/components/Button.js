import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 px-5 py-2 mx-2 rounded-lg hover:bg-gray-400">
      {name}
    </button>
  );
};

export default Button;
