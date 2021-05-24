import "../../App.css";
import React from "react";
import HeroImage from "../HeroImage";
import Title from "../Title";
import Card from "../Card";
import Card2 from "../Card2";
import Card3 from "../Card3";
import TopPosts from "../TopPost";
import "../../card.css";

function Home() {
  return (
    <div>
      <HeroImage />
      <Title name="The Latest" />
      <Card />
      <Card />
      <Title name="Latest Articles" />
      <div className="Flex Flx-Row bd-highlight mb-3">
        <div>
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
      <Title name="Latest Stories" />
      <div className="card mb-3 border-0">
      <div className="row g-0">
      <div className="col">
        <Card3 />
        <Card3 />
        <Card3 />
  </div>
    </div>
        
      </div>
      <p className="ps-2 mb-5">
        View more!
      </p>
    </div>
  );
}

export default Home;
