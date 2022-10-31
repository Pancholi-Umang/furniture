import React,{useState, useEffect} from "react";
import data from "./Carddata";
import "./Card.css";

const Search = () => {
//   const filteredData = data.filter((el) => {
//         // return el.text.toLowerCase().includes()
// })

const [MainData, setMainData] = useState(null);

useEffect(() => {
  setMainData(data)
},[data])

const checkChange = (e) => {
  const searchData = data.filter((el) => el.title.toLowerCase().includes(e.target.value.toLowerCase()));
  setMainData(searchData)
}
const handleClickhello = (event) => {
  event.preventDefault();
  
    document.write(
      "<h1>i well send your order in your register address</h1>"
    );
};

  return (
    <>
      <div className="majortap">
        <input type="text" className="myinp" placeholder="Search here...." onChange={(e) => checkChange(e)} />
      </div>
      <div className="iuiuiuiuiu">
        {MainData?.map((value, index) => {
          return (
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
                  <button type="submit" onClick={handleClickhello} className="bynow">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
