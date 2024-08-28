import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="px-6 pb-4 shadow-md">
      <div className="border-gray-300 border-b-2 mb-2 min-w-56">
        <ul className="my-2">
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">Home</li>
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">Shorts</li>
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">
            Subscriptions
          </li>
        </ul>
      </div>

      <div className="border-gray-300 border-b-2 mb-2">
        <h3 className="font-bold text-lg px-2">You</h3>
        <ul className="my-2">
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">
            Your Channel
          </li>
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">History</li>
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">Playlists</li>
        </ul>
      </div>

      <div className="border-gray-300">
        <h3 className="font-bold text-lg px-2"> Explore </h3>
        <ul className="my-2">
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">Trending</li>
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">Music</li>
          <li className="py-2 px-2 rounded-md hover:bg-slate-200">Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
