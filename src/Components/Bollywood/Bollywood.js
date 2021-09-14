import "../../App.css";
import React,{useState, useEffect} from "react";
import axios from "axios"
import Title from "../Title";
import Card2 from "../Cards/Card2";
import TopPosts from "../TopPost";
import Navbar from "../../Components/Navbar";
import Heading from "../../Components/Heading";

function Bollywood() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:3001/latest");
      setCardData(request.data);
      
      return request;
    }
    fetchData();
  },[]);



  return (
    <div>
      <Heading />
      <Navbar />
      <Title name="Bollywood" />
      <div className="Flex Flx-Row  mb-3">
        <div>
          <Card2  Data={cardData}/>
       
          <p className="ps-2">
             Load more!
          </p>
        </div>
        <div className="advertisement"> Advertisement </div>
      </div>
      <Title name="Top Posts" />
      <TopPosts  Data={cardData} />
    </div>
  );
}

export default Bollywood;
