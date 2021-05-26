import "../../App.css";
import React from "react";
import Title from "../Title";
import Card2 from "../Cards/Card2";
import TopPosts from "../TopPost";
import Navbar from "../../Components/Navbar";
import Heading from "../../Components/Heading";

function Bollywood() {
  return (
    <div>
      <Heading />
      <Navbar />
      <Title name="Bollywood" />
      <div className="Flex Flx-Row  mb-3">
        <div>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <p className="ps-2">
             Load more!
          </p>
        </div>
        <div className="advertisement"> Advertisement </div>
      </div>
      <Title name="Top Posts" />
      <TopPosts />
    </div>
  );
}

export default Bollywood;
