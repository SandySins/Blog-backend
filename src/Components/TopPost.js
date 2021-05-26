import React from "react";
import "../card.css";
const topPosts = (props) => {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-8">
        <div className="card dark text-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
              className="card-img"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h5 className="card-title"> Card title </h5>
              <p className="card-text"> Last updated 3 mins ago </p>
              <div className="rank">1</div>
            </div>
            
          </div>
        </div>
        <div className="col-4">
        <div className="p-2 ">
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
              <p className="card-text">
                <small className="text-muted"> Last updated 3 mins ago </small>
              </p>
              <div className="rank text-muted">2</div>
            </div>
          </div>
        </div>
      </div>
      
    </div><div className="p-2  border-top ">
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
              <p className="card-text">
                <small className="text-muted"> Last updated 3 mins ago </small>
              </p>
              <div className="rank text-muted">3</div>
            </div>
            
          </div>
        </div>
      </div>
    </div><div className="p-2  border-top ">
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
              <p className="card-text">
                <small className="text-muted"> Last updated 3 mins ago </small>
              </p>
              <div className="rank text-muted">4</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
          
         </div>
      </div>
    </div>
  );
};
export default topPosts;
