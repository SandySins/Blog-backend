import React from "react";
import "../../card.css";

const Card2 = (props) => {
  let item=[];
  
  for (let i=0; i<props.Data.length; i++) {
    if(props.Data[i].title === "Joshua Tree"){
      item.push(<div key={i} className="p-2  border-top ">
      <div className="card mb-3 c-width border-0">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={props.Data[i].imgUrl}
              className="image"
              alt="..."
            ></img>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{props.Data[i].title}</h5>
              <p className="card-text text-muted">
              {props.Data[i].text}
              </p>
              <p className="card-text">
                <small className="text-muted">{props.Data[i].lastUpdated} </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
    
}

  return (
    <>
    {item}
    </>
    );
};
export default Card2;
