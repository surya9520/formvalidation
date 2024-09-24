import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link
              to={"/"}
              className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
            >
              Form-1
            </Link>
          </li>
          <li>
            <Link
              to={"/form2"}
              className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
            >
              Form-2
            </Link>
          </li>
          <li>
            <Link
              to={"/form3"}
              className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
            >
              Form-3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
