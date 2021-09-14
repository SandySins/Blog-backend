import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div>
    <nav className="navbar navbar-expanding navbar-light Shadow-Box  margin-bottom white Bor-radius padding0 border-bottom">
      <div className="cont-fluid">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav App-nav-item justify-content-evenly">
            <li className={`${navbarOpen ? "nav-item1" : "nav-item"}`}>
                <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>
            <li className={`${navbarOpen ? "nav-item1" : "nav-item"}`}>
            <NavLink className="nav-link active" to="/Bollywood">Bollywood</NavLink>
            </li>
            <li className={`${navbarOpen ? "nav-item1" : "nav-item"}`}>
              <NavLink className="nav-link active" to="/Bollywood">Technology</NavLink>
            </li>
            <li className={`${navbarOpen ? "nav-item1" : "nav-item"}`}>
            <NavLink className="nav-link active" to="/Bollywood">Hollywood</NavLink>
            </li>
            <li className={`${navbarOpen ? "nav-item1" : "nav-item"}`}>
            <NavLink className="nav-link active" to="/Bollywood">Fitness</NavLink>
            </li>
            <li className={`${navbarOpen ? "nav-item1" : "nav-item"}`}>
            <NavLink className="nav-link active" to="/Bollywood">Food</NavLink>
            </li>
          </ul>
          <button className="btns" onClick={handleToggle}>
            <FiMenu style={{ color: "#7b7b7b", width: "35px", height: "35px" }}/>
        </button>
        </div>
      </div>
    </nav>
  </div>
     
    </>
  );
};
export default Navbar;
