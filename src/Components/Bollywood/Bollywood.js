import "../../App.css";
import React from "react";
import Title from "../Title";
import Card2 from "../Card2";
import TopPosts from "../TopPost";


function Bollywood() {
  return (
    <div>
      <Title name="Bollywood" />
      <div className="Flex Flx-Row bd-highlight mb-3">
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
