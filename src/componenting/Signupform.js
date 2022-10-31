import React,{useState} from "react";
import "./Signupform.css";

const Signupform = () => {
    const [user, setUser] = useState({
      name:"",
      email:"",
      password:"",
    });

    let name , value;
    const getUserData = (event) =>{
      name = event.target.name;
      value =  event.target.value;

      setUser({ ...user, [name]:value });
    };

    const postData = async (e) => {
      e.preventDefault();

      const { name, email, password} = user;

      if (name && email && password) 
      {
        const res = await fetch("https://reactform-ce561-default-rtdb.firebaseio.com/youtubereactform.json",{
        method:"POST",
        headers:{
          "Contant-Type":"application/json",
        },
        body:JSON.stringify({
          name,
          email,
          password,
        })
      }
      );
      if (res) {
        setUser({
            name:"",
            email:"",
            password:"",
        });
        alert("Data stored Successfully");
      }
    }
    else
    {
        alert("please fill all the data");
    }
    };

  return (
    <div className="containerzzz">
      <div className="app-wrapperzzz">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper" method="POST">
          <div className="name">
            <label className="label">Full Name</label>
            <input
              type="text"
              className="input"
              name="name"
              value={user.name}
              onChange={getUserData}
              required
              autoComplete="off"
            />
          </div>
          <div className="email"> 
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={user.email}
              onChange={getUserData}
              required
              autoComplete="off"
            />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={user.password}
              onChange={getUserData}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <button className="submit" onClick={postData}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
