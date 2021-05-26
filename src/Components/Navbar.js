import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'
const navbar = ()=>{
return (
  <>
  <div>
    <nav className="navbar navbar-expanding navbar-light Shadow-Box  margin-bottom white Bor-radius padding0 border-bottom">
      <div className="cont-fluid">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav App-nav-item justify-content-evenly">
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" to="/Bollywood">Bollywood</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/Bollywood">Technology</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" to="/Bollywood">Hollywood</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" to="/Bollywood">Fitness</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" to="/Bollywood">Food</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  </>
);
}
export default navbar;