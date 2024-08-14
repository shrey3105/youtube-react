import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between shadow-md p-4">
      <div className="flex items-center">
        <img
          onClick={handleMenuToggle}
          className="w-8 cursor-pointer mr-2 h-8"
          alt="Menu Icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
        ></img>
        <img
          className="w-24"
          alt="Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsmgFMM4neY4YLWYz7vDF2s_CUZztacdWT-Fi7peS7Wrk-aPZUPdSI_WC-n7mp5Ovh4s&usqp=CAU"
        ></img>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-l-full border-gray-300 border-2 border-r-0 w-96"
        ></input>
        <button className="px-4 py-2 rounded-r-full border-gray-300 border-2">
          Search
        </button>
      </div>
      <div>
        <img
          className="w-12"
          src="https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
