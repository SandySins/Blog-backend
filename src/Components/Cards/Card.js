import React from "react";
import "../../card.css";



function Card(props){
  let item=[];
  
  for (let i=0; i<props.Data.length; i++) {
    if(props.Data[i].title === "Catch Waves with Adventurer Guide"){
      item.push(<div key={i} className="card-group ">
      <div className="card border-0">
        <img
          src={props.Data[i].imgUrl}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.Data[i].title}</h5>
          <p className="card-text">
          {props.Data[i].text}
          </p>
        </div>
        <div className="ps-3">
          <small className="text-muted">{props.Data[i].lastUpdated}</small>
        </div>
      </div>
    </div>
  )
    }
    
  }
  
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

export default Card;
