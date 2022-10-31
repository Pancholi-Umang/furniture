import React from "react";
import { Link } from "react-router-dom";
import odrpng from "../HelpingPics/Order_related.png";
import paypng from "../HelpingPics/Payments.png";
import otherpng from "../HelpingPics/Others.png";
import writepng from "../HelpingPics/Write_to_us.png";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="mycenterHelp">Help & Contact Information</h1>
      <div className="aadiline"></div>
      <div className="mytitleforhelp"><h1 className="lefthelp">About Help For:-</h1></div>
      <div className="fourhelpinfo">
        <ul className="fourinone">
          <li className="nonestyl nonestyle1">
            <Link className="help1" to="/about/fororder">
              <img className="helpin1" src={odrpng} alt="error" />
            </Link>
          </li>
          <li className="nonestyl nonestyle2">
            <Link className="help2" to="/about/forpayments">
              <img className="helpin1" src={paypng} alt="error" />
            </Link>
          </li>
          <li className="nonestyl nonestyle3">
            <Link className="help3" to="/about/forwritecall">
              <img className="helpin1" src={writepng} alt="error" />
            </Link>
          </li>
          <li className="nonestyl nonestyle4">
            <Link className="help4" to="/about/others">
              <img className="helpin1" src={otherpng} alt="error" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="aadiline"></div>
      <p className="helpemail1">Email: support@viru.com</p>
      <p className="helpemail2">
        Email for international orders: internationalsupport@viru.com
      </p>
      <div className="aadiline"></div>
      <div className="helpnum1">Complain No : 0261-256-8696</div>
      <div className="helpnum2">Helpline No : 0261-256-0000</div>
      <div className="aadiline"></div>
    </div>
  );
};

export default About;
