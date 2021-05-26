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
  },
  {
    title: "Hello3",
    text:"This is my world"
  },
  {
    title: "Hello3",
    text:"This is my world"
  },
  {
    title: "Hello3",
    text:"This is my world"
  },
]


function classHandler(Class){
  let item=[];
  let change="card-body";
  Class===true? change="card-body limit":change="card-body"
  console.log(Class)
  for (let i=0; i<cardData.length; i++) {
    item.push(<div key={i} className={change}>
    <h5 className="card-title"> Card title </h5>
    <p className="card-text">
      This is a wider card with supporting text below as a natural lead
      - in to additional content.This content is a little bit longer.
    </p>
    <p className="card-text">
      <small className="text-muted"> Last updated 3 mins ago </small>
    </p>
  </div>)
  }
  return item
}

const card3 = (props) => {
  console.log(props)
  return (
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="grid">
            {classHandler(props.name)}  
        </div>
      </div>
    </div>
  );
};
export default card3;
