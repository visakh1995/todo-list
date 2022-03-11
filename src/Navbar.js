import React from "react";

function Navbar() {
  return (
      <div className="navbar">
          <div className="container flex">
              <h1>Logo</h1>
              <nav>
                  <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">features</a></li>
                      <li><a href="">docs</a></li>
                  </ul>
              </nav>

          </div>
      </div>

  );
}

export default Navbar;
