import React from "react";
import "../../card.css";

var cardData= [
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
let item=[];
for (let i=0; i<cardData.length; i++) {
  item.push(<div key={i} className="card-group ">
    <div className="card border-0">
      <img
        src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{cardData[i].title}</h5>
        <p className="card-text">
        {cardData[i].text}
        </p>
      </div>
      <div className="ps-3">
        <small className="text-muted">{cardData[i].text}</small>
      </div>
    </div>
  </div>
)
}
const card = () => {
  return (
    <div className="mb-5">
      <div className="row">
      <div className="grid">
          {item}
      </div>
      </div>
    </div>
  );
};
export default card;
