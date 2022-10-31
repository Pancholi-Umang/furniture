import React from "react";
import "./Card.css";

const Card = (props) => {
  const handleClickhello = (event) => {
    event.preventDefault();
  
    document.write(
      "<h1>i well send your order in your register address</h1>"
    );
  };
  return (
    <div className="iuiuiuiuiu">
    {
      props.details.map(function (value,index) 
        {
          return(
            <div className="mainContainer" key={index}>
            <div className="cardContainer">
              <div className="cardImage">
                <img src={value.img} alt="errror" className="controlimg" />
              </div>
              <div className="cardTitle">
                <h3>{value.title}</h3>
              </div>
              <div className="cardDescription">
                <p>{value.description}</p>
              </div>
              <div className="butn">
                <button type="submit" onClick={handleClickhello} className="bynow">Buy Now</button>
              </div>
            </div>
          </div>
          )
        }
      )
    }
    </div>
  );
};

export default Card;


