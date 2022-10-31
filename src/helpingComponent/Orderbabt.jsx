import { useState } from "react";
import { Link } from "react-router-dom";
import "./Orderbabt.css";

const Orderbabt = () => {
  const [state, setState] = useState("");

  const handChange = (event) => {
    setState(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handClick = (event) => {
    event.preventDefault();

    document.write(
      "<h1>Our customer service representative will review your query and revert in the next 24 hours.</h1>"
    );
    document.write("<h1>On This Email Address --> ", state, " </h1>");
  };
  return (
    <div>
      <div className="myleftheadingss">
        <h1 className="bnmss">Please enter your Valid Email:-</h1>
      </div>
      <div className="mycentertextbox">
        <form>
          <div className="myleft">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handChange}
              value={state}
              autoComplete="off"
              class="defaultTextBoxss advancedSearchTextBoxss"
              placeholder="Enter Mobile Number"
            />
            <div className="swar">
              <input type="checkbox" name="ch1" id="" />
              Cancellation & Refund Process
            </div>
            <div className="swar">
              <input type="checkbox" name="ch2" id="" />
              My order is not showing
            </div>
            <div className="swar">
              <input type="checkbox" name="ch3" id="" />
              My order is not a tracking
            </div>
            <div className="swar">
              <input type="checkbox" name="ch4" id="" />I have not received my
              product
            </div>
            <div className="swar">
              <input type="checkbox" name="ch5" id="" />
              Product received but damaged
            </div>
          </div>
          <button type="submit" onClick={handClick} className="glow-on-hovers">
            Submit
          </button>
        </form>
      </div>
      <div className="myleftheadingss myboxing">
        <h1 className="bnmss">You Can Other Order Related Query You Can Click Below.  ↓</h1>
        <li className="myunderBtnkll">
          <Link className="jsxbkll" to="/about/others">
            Other Query
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Orderbabt;
