import "../../App.css";
import React,{ useState } from "react";
import HeroImage from "../HeroImage";
import Title from "../Title";
import Card from "../Cards/Card";
import Card2 from "../Cards/Card2";
import Card3 from "../Cards/Card3";
import TopPosts from "../TopPost";
import "../../card.css";
import Navbar from "../../Components/Navbar";
import Heading from "../../Components/Heading";

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
  return (
    <div>
      <Heading />
      <Navbar />
      <HeroImage />
      <Title name="The Latest" />
      <Card />
      <Title name="Latest Articles" />
      <div className="Flex Flx-Row  mb-3">
        <div>
          <Card2 />
          <Card2 />
          <Card2 />
          <p className="ps-2">Load more!</p>
        </div>
        <div className="advertisement"> Advertisement </div>
      </div>
      <Title name="Top Posts" />
      <TopPosts />
      <Title name="Latest Stories" />
            <Card3 name={classState.className}/> 
      <p className="ps-2 mb-5" onClick={handleChange}>View more!</p>
    </div>
  );
}

export default Home;
