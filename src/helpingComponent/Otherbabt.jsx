import { useState } from "react";
import "./Otherbabt.css";

const Otherbabt = () => {
  const [messagess, setMessagess] = useState("");

  const handleChangebro = (event) => {
    setMessagess(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handleClickbro = (event) => {
    event.preventDefault();

    document.write(
      "<h1>We have registered your problem and it will be resolved within 24 hours",
      "<br>",
      messagess,
      "<br>", 
      " On Your &#129045; Above &#129045; Mobile Number</h1>"
    );
  };
  return (
    <div>
      <div className="myleftheadingbro">
        <h1 className="bnmbro">
          Please enter your mobile number when our representative is free and
          will call you immediately:-
        </h1>
      </div>
      <form>
        <div className="myleftheadingbro myleftheadingcenterbro">
          <input
            type="text"
            id="messagess"
            name="messagess"
            onChange={handleChangebro}
            value={messagess}
            autoComplete="off"
            class="defaultTextBoxbro advancedSearchTextBoxbro"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div>
          <textarea
            id="w3review"
            name="w3review"
            placeholder="Enter here what you need help and Submit "
            rows="10"
            cols="50"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleClickbro}
          className="glow-on-hoverbro"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Otherbabt;

// i am collect your information successfully
// that means here use of textarea
// textarea no use kari ne batavi devanu k ne k 
