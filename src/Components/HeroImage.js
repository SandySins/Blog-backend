import React from "react";
import "../card.css";

var card= [
  {
    title: "Title of Vertical Gallery",
    text:"Overnight Adventure",
    imgUrl: "https://www.makemytrip.com/travel-guide/media/dg_image/imphal/Imphal-Valley-Imphal.jpg"
  },
  {
    title: "Sound Cloud Your Love is Doomed",
    text:"Overnight Adventure",
    imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Valleys-In-Himachal-Pradesh-OG.jpg"
  },
  {
    title: "Sound Cloud Your Love is Doomed",
    text:"Overnight Adventure",
    imgUrl: "https://static.india.com/wp-content/uploads/2018/08/Sangla-Valley.jpg?impolicy=Medium_Resize&w=1200&h=800"
  }
]
const heroImage = () => {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-8 margin-bottom">
          <div className="card dark height text-white">
            <img
              src={card[0].imgUrl}
              className="card-img height"
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
              src={card[1].imgUrl}
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
              src={card[2].imgUrl}
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
