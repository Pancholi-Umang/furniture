import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="mybgimag">
      <div className="myleftbox">
        <h1>Make Your Comfort Is Our Happiness</h1>
        <p>
          Design creates culture. Culture shape values. Values determine the future.
        </p>
        {/* ahiya class nu name oppo aapyu atle hover effect head.jsx vali lagi jase*/}
        <li className="myunderBtn">
          <Link className="jsxb" to="/shop">
            Shop Now
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Home;
