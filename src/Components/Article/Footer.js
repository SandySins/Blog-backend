import React,{useState, useEffect} from "react";
import "./Article.css";
import axios from "axios"
const Footer = () => {

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:3001/latest");
      setCardData(request.data);
      
      return request;
    }
    fetchData();
  },[]);

  let item=[];
  for (let i=0; i<cardData.length; i++) {
    if(cardData[i].title === "Joshua Tree"){
      item.push(<div className="card-group ">
      <div className="card card1 border-0">
        <img
          src={cardData[i].imgUrl}
          className="image1"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{cardData[i].title}</h5>
          <p className="card-title">{cardData[i].text}</p>
        </div>
        <div className="ps-3">
          <div className="body2">
            <div>
              <img
                alt="SandeepKumar"
                className="s body3"
                src={cardData[i].imgUrl}
                width="48"
                height="48"
              ></img>
            </div>
            <div className="cont s">
              <div className="">
                <h6>{cardData[i].userName}</h6>
              </div>
              <div>
                <h6 className="text-muted">{cardData[i].lastUpdated}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
    }
  }
 
  return (
    <div>
      <nav className="navbar1 navbar-expanding navbar-light Shadow-Box  margin-bottom  Bor-radius border-bottom">
        <div className="cont-fluid width">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav nav1 App-nav-item ">
              <li className="nav-item item1 pd-2">More From The Siren</li>
              <li className="grid">
                {item}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Footer;
