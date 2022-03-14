import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
      <div className="navbar">
          <div className="container flex">
              <h1>Logo</h1>
              <nav>
                  <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">Features</a></li>
                      <li><Link to ="/cart">Cart</Link></li>

                  </ul>
              </nav>

          </div>
      </div>

  );
}

export default Navbar;
