import React from "react";
import "../card.css";
const topPosts = (props) => {
  let item = [];
  let item2 = [];
  for (let i = 0; i < props.Data.length; i++) {
    if (props.Data[i].text === "Midnights Adventure") {
      item.push(
        <div key={i} className="col-8">
          <div className="card dark text-white">
            <img
              src={props.Data[i].imgUrl}
              className="card-img height"
              alt="Nothing"
            ></img>
            <div className="card-over">
              <h3 className="card-title">{props.Data[i].title}</h3>
              <p className="card-text"> {props.Data[i].lastUpdated}</p>
              <div className="rank">1</div>
            </div>
          </div>
        </div>
      );
    } else if (props.Data[i].title === "Catch Waves with Adventurer Guide") {
      item2.push(
        <div key={i} className="p-2 ">
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
                  <p className="card-text">
                    <small className="text-muted">
                      {props.Data[i].lastUpdated}
                    </small>
                  </p>
                  <div className="rank text-muted">2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="mb-5">
      <div className="row">
        {item}
        <div className="col-4">{item2}</div>
      </div>
    </div>
  );
};
export default topPosts;
