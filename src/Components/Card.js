import React from "react";
import "../card.css";
const card = (props) => {
  return (
    <div className="mb-5">
      <div className="row">
        <div className="col">
          <div className="card-group ">
            <div className="card border-0">
              <img
                src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Card title </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead - in to additional content.This content is a little bit
                  longer.
                </p>
              </div>
              <div className="ps-3">
                <small className="text-muted"> Last updated 3 mins ago </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-group">
            <div className="card border-0">
              <img
                src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Card title </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead - in to additional content.This content is a little bit
                  longer.
                </p>
              </div>
              <div className="ps-3">
                <small className="text-muted"> Last updated 3 mins ago </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-group">
            <div className="card border-0">
              <img
                src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Card title </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead - in to additional content.This content is a little bit
                  longer.
                </p>
              </div>
              <div className="ps-3">
                <small className="text-muted"> Last updated 3 mins ago </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default card;
