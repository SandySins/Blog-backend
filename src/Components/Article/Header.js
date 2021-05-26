import React from "react";
import '../../App.css';
import Heading from '../Heading'
const header = () => {
  return (
    <div>
    <nav className="navbar navbar-expanding navbar-light Shadow-Box  margin-bottom white Bor-radius padding0 border-bottom">
      <div className="cont-fluid width">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav App-nav-item justify-content-between">
            <li className="nav-item pd-2">
               <Heading />
            </li>
            <li className="nav-item">
            <button className="Button">Get Started</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};
export default header;
