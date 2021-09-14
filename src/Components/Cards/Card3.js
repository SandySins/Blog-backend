import React from "react";
import "../../card.css";

function classHandler(Class){
  let item=[];
  let change="card-body";
  Class.name===true? change="card-body limit":change="card-body";
  
  for (let i=0; i<Class.Data.length; i++) {
    if(Class.Data[i].title === "Joshua Tree"){
    item.push(<div key={i} className={change}>
    <h5 className="card-title">{Class.Data[i].title}</h5>
    <p className="card-text">
      {Class.Data[i].text}
    </p>
    <p className="card-text">
      <small className="text-muted">{Class.Data[i].lastUpdated}</small>
    </p>
  </div>)
    }
  }
  return item
}

const card3 = (props) => {
  return (
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="grid">
            {classHandler(props)}  
        </div>
      </div>
    </div>
  );
};
export default card3;
