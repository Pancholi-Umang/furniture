import { useState } from "react";
import { Link } from "react-router-dom";
import "./Paymentbabt.css";

const Paymentbabt = () => {
  const [loft, setLoft] = useState("");

  const handlingChange = (event) => {
    setLoft(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handlingClick = (event) => {
    event.preventDefault();

    document.write(
      "<h1>Our customer service representative will review your query and revert in the next 24 hours.</h1>"
    );
    document.write("<h1>On This Email Address --> ", loft, " </h1>");
  };
  return (
    <div>
      <div className="myleftheadingling">
        <h1 className="bnmssling">Please enter your Valid Email:-</h1>
      </div>
      <div className="mycentertextling">
        <form>
          <div className="myleftlunk">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handlingChange}
              value={loft}
              autoComplete="off"
              class="defaultTextling advancedSearchTextling"
              placeholder="Enter Mobile Number"
            />
            <div className="swarling">
              <input type="checkbox" name="cher1" id="" />
              What Is Viru Reward Card
            </div>
            <div className="swarling">
              <input type="checkbox" name="cher2" id="" />
              How Can I Use My Coupne Code
            </div>
            <div className="swarling">
              <input type="checkbox" name="cher3" id="" />
              Availabality Of Payment Method
            </div>
            <div className="swarling">
              <input type="checkbox" name="cher4" id="" />
              EMI Option Available ?
            </div>
            <div className="swarling">
              <input type="checkbox" name="cher5" id="" />
              Payment Is Not SuccessFull
            </div>
          </div>
          <button type="submit" onClick={handlingClick} className="glow-on-hoverling">
            Submit
          </button>
        </form>
      </div>
      <div className="myleftheadingling myboxingling">
        <h1 className="bnmss">You Can Other Order Related Query You Can Click Below.  ↓</h1>
        <li className="myunderBtnklling">
          <Link className="jsxbklling" to="/about/others">
            Other Query
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Paymentbabt;
