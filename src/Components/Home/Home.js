import "../../App.css";
import React,{useState, useEffect} from "react";
import HeroImage from "../HeroImage";
import Title from "../Title";
import Card from "../Cards/Card";
import Card2 from "../Cards/Card2";
import Card3 from "../Cards/Card3";
import TopPosts from "../TopPost";
import "../../card.css";
import Navbar from "../../Components/Navbar";
import Heading from "../../Components/Heading";
import axios from "axios"
function Home() {
  const [classState, setclassState]=useState({
    className: true
  });
  const handleChange=()=>{
    if(classState.className){
      setclassState({
        className: false
      })
    }else{
      setclassState({
        className: true
      })
    }
    
  }
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
      <HeroImage />
      <Title name="The Latest" />
      <Card Data={cardData} />
      <Title name="Latest Articles" />
      <div className="Flex Flx-Row  mb-3">
        <div>
          <Card2 Data={cardData}/>
          <p className="ps-2">Load more!</p>
        </div>
        <div className="advertisement"> Advertisement </div>
      </div>
      <Title name="Top Posts" />
      <TopPosts Data={cardData} />
      <Title name="Latest Stories" />
            <Card3 Data={cardData} name={classState.className}/> 
      <p className="ps-2 mb-5" onClick={handleChange}>View more!</p>
    </div>
  );
}

export default Home;
