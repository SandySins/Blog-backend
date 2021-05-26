import React from "react";
import "../card.css";

var card= [
  {
    title: "Hello1",
    text:"This is my world"
  },
  {
    title: "Hello2",
    text:"This is my world"
  },
  {
    title: "Hello3",
    text:"This is my world"
  }
]
const heroImage = () => {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-8 margin-bottom">
          <div className="card dark text-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
              className="card-img"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h5 className="card-title"> {card[0].title} </h5>
              <p className="card-text"> {card[0].text} </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card dark text-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
              className="card-img"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h5 className="card-title">{card[1].title}</h5>
              <p className="card-text"> {card[1].text} </p>
            </div>
          </div>
          <div className="card dark text-white mt-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
              className="card-img"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h5 className="card-title">{card[2].title}</h5>
              <p className="card-text">{card[2].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default heroImage;
