import React from "react";
import "./Article.css";
import Footer from "./Footer"
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'//-fas
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons"; //fab

const cardDetails = (props) => {
  return (
    <>
      <Header />
      <section className="head">
        <div className="head1">
          <div className="head2">
            <div>
              <h1 id="229a" className="head3">
                5 Ways to animate a React app.
              </h1>
              <div className="ek">
                <div className="Body1">
                  <div className="body2">
                    <div>
                      <img
                        alt="SandeepKumar"
                        className="s body3"
                        src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"
                        width="48"
                        height="48"
                      ></img>
                    </div>
                    <div className="cont s">
                      <div className="">
                        <h6>Sandeep Kumar</h6>
                      </div>
                      <div>
                        <h6 className="text-muted"> From 6 nov 2021</h6>
                      </div>
                    </div>
                  </div>
                  <div className="body6">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <FontAwesomeIcon icon={faTwitterSquare} />
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                  </div>
                </div>
              </div>
              <div className="head4">
                <div>
                  <img
                    alt="SandeepKumar"
                    className="hImage"
                    src="https://miro.medium.com/max/2456/1*1Z177dpTeAp7uEFc5Zx2xg.png"
                  ></img>
                </div>
                <h4>
                  Animation in ReactJs app is a popular topic and there are many
                  ways to create different types of animations.Many developers
                  create animation exclusively using css and adding classes to
                  HTML tags. This is a great way and you should use it. If you
                  want to create complex animations you can pay attention to
                  GreenSock. GreenSock is the most powerful animation platform.
                  There are also a lot of libraries, components for creating
                  animation in React.{" "}
                </h4>
                <h4>Let’s talk about them.</h4>
                <div>
                  <img
                    alt="SandeepKumar"
                    className="mImage"
                    src="https://miro.medium.com/max/700/1*08y12Sp1d9cLSKE9nz1EaA.png"
                  ></img>
                </div>
                <div>
                  <button className="btn">Javascript</button>
                  <button className="btn">Javascript</button>
                  <button className="btn">Javascript</button>
                </div>
                <div className="flex">
                <FontAwesomeIcon icon={faThumbsUp} />
                <h6 className="noth6">9.3k Likes</h6>
                </div>
                <div className="body2">
                    <div>
                      <img
                        alt="SandeepKumar"
                        className="s body4"
                        src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"
                        width="48"
                        height="48"
                      ></img>
                    </div>
                    <div className="cont s">
                      <div>
                        <h6 className="text-muted">Written By:</h6>
                      </div>
                      <div>
                        <h6>Sandeep Kumar</h6>
                      </div>
                      <div>
                        <h6 className="text-muted">From 6 nov 2021</h6>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
         
          </div>
      
        </div>
        <Footer />
      </section>
    
    </>
  );
};
export default cardDetails;
