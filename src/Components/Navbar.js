import React from 'react';
import '../App.css';
const navbar = ()=>{
return (
  <>
  <div>
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm  mb-2 bg-white rounded p-0 border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav App-nav-item justify-content-evenly">
            <li className="nav-item">
              <p className="nav-link active">
                Home
                </p>
            </li>
            <li className="nav-item">
            <p className="nav-link active">
            Bollywood
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                Technology
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                Hollywood
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                Fitness
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                Food
              </p>
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