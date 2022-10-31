import { useState } from "react";
import './Writeproblem.css'

const Writeproblem = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    document.write('<h1>Our customer representative will call you on ====>', message ,' this number shortly</h1>');
  };
  return (
    <div>
      <div className="myleftheading">
        <h1 className="bnm">
          Please enter your mobile number when our representative is free and
          will call you immediately:-
        </h1>
      </div>
      <form>
        <div className="myleftheading myleftheadingcenter">
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            autoComplete="off"
            class="defaultTextBox advancedSearchTextBox"
            placeholder="Enter Mobile Number"
          />
        </div>
        <button type="submit" onClick={handleClick} className="glow-on-hover">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Writeproblem;


