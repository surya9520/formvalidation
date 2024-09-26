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
              onSubmit-validation
            </Link>
          </li>
          <li>
            <Link
              to={"/form2"}
              className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
            >
              onChange-validation
            </Link>
          </li>
          <li>
            <Link
              to={"/form3"}
              className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
            >
              OnBlur-validation
            </Link>
          </li>
          <li>
            <Link
              to={"/react"}
              className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
            >
              React-hook-form
            </Link>
          </li>
          <li>
            <Link
              to={"/redux-counter-page"}
              className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
            >
              redux-counter-page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
