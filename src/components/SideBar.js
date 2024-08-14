import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="px-6 py-4 shadow-md">
      <div className="border-gray-300 border-b-2 mb-2 min-w-56">
        <ul className="my-2">
          <li className="py-2">Home</li>
          <li className="py-2">Shorts</li>
          <li className="py-2">Subscriptions</li>
        </ul>
      </div>

      <div className="border-gray-300 border-b-2 mb-2">
        <h3 className="font-bold text-lg">You</h3>
        <ul className="my-2">
          <li className="py-2">Your Channel</li>
          <li className="py-2">History</li>
          <li className="py-2">Playlists</li>
        </ul>
      </div>

      <div className="border-gray-300">
        <h3 className="font-bold text-lg"> Explore </h3>
        <ul className="my-2">
          <li className="py-2">Trending</li>
          <li className="py-2">Music</li>
          <li className="py-2">Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
