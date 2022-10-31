// import React , { useState, useEffect } from "react";
// import Validation from "./Validation";
// import "./Signupform.css";
// import axios from "axios";
// // import Signupform from './Signupform';
// // import SignupFormSuccess from "./SignupFormSuccess";

// const Useform = (submitForm) => {
//   const [inputs, setInputs] = useState({
//     fname: "",
//     emails: "",
//     passwords: "",
//   });

//   const [errors, setErrors] = useState({}); //handleformSubmit event ma value pass kareli chhe
//   const [dataIsCorrect, setDataIsCorrect] = useState(false);

//   const handleChange = (event) => {
//     setInputs({
//       ...inputs,
//       [event.target.name]: event.target.value,
//       // [event.target.name] chhe atle k chhe ne input field na name attribute thi target thay che
//     });
//   };

//   const handleFormSubmit = () => {
//     setErrors(Validation(inputs));
//     setDataIsCorrect(true); 
//   };
  
  
//   const Formsubmission = (event) => {
//     axios.post('http://localhost:8888/api/user', inputs).then(function(response){
//       console.log(response.data)
//       event.preventDefault();
//     });
//   }



//   useEffect(() => {
//     //aama DataIsCorrect vaalu chhe te useState chhe
//     if (Object.keys(errors).length === 0 && dataIsCorrect) {
//       submitForm(true);
//     }
//   }, [errors]);

//   return { handleChange, handleFormSubmit, errors, inputs, Formsubmission };
// };

// export default Useform;
