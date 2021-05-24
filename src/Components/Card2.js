import React from "react";
import "../card.css";
const card2 = (props) => {
  return (
    <div className="p-2 bd-highlight border-top ">
      <div className="card mb-3 c-width border-0">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"
              className="image"
              alt="..."
            ></img>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title"> Card title </h5>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead - in to additional content.This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted"> Last updated 3 mins ago </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default card2;
