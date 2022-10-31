import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

const Head = () => {
  return (
    <div>
      <div className="mainHeader">
        <div className="logo">
          <span className="firstlatter">
            <h1>Viru</h1>
          </span>
          <span className="lastlatter">
            <h2>Furniture</h2>
          </span>
        </div>
        <div className="mycenterHeading">
          
        </div>
        <div className="listitm">
          <ul className="mylistname">
            <li>
              <Link className="opos" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="opos" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="opos" to="/Search">
                Search
              </Link>
            </li>
            <li>
              <Link className="opos" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="opos" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
