import React,{useState} from "react";
import "./Signupform.css";
import Signupform from "./Signupform";
import SignupFormSuccess from "./SignupFormSuccess";

const Form = () => {
  const [formIsSubmited, setFormIsSubmited] = useState(false);

  const submitForm = () => {
    setFormIsSubmited(!formIsSubmited);
  };

  return (
    <div>
      {!formIsSubmited ? (
        <Signupform submitForm={submitForm} />
      ) : (
        <SignupFormSuccess />
      )}
    </div>
  );
};

export default Form;
