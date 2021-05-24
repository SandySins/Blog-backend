import React from "react";
import "../card.css";
const heroImage = () => {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-8 mb-2">
          <div className="card bg-dark text-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
              className="card-img"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h5 className="card-title"> Card title </h5>
              <p className="card-text"> Last updated 3 mins ago </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card bg-dark text-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
              className="card-img"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h5 className="card-title"> Card title </h5>
              <p className="card-text"> Last updated 3 mins ago </p>
            </div>
          </div>
          <div className="card bg-dark text-white mt-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
              className="card-img"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h5 className="card-title"> Card title </h5>
              <p className="card-text"> Last updated 3 mins ago </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default heroImage;
