import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <div className="navbar">
      <div className="container flex">
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/plans">Plans</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/workaround">works</a>
            </li>
            <li>
              <Link to="/cart">
                <FaCartPlus />
              </Link>
            </li>
            <li>{amount}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
