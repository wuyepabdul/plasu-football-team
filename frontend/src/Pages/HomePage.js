import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import football1 from "../images/football-pitch1.jpg";
import football2 from "../images/football-pitch2.jpg";
import plasuTeam from "../images/plasuTeam.jpg";
import ball from "../images/ball.jpg";

const HomePage = () => {
  const images = [plasuTeam, football1, football2, ball];
  const posts = [
    {
      title: "VC's Cup",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,eius fugit. Totam error harum repellat libero volupta",
    },
    {
      title: "Inter Local Goverment",
      description:
        "adipisicing elit. Ipsum,eius fugit Lorem ipsum dolor, sit amet consectetur",
    },
    {
      title: "Kila League",
      description:
        "Lorem ipsum dolor, sit amet consectetur sit amet consecteturamet consectetur sit amet consectetur",
    },
  ];
  return (
    <div className="home">
      <div className="hero-container">
        <div className="hero section">
          <Carousel
            className="carousel"
            showArrows={false}
            showThumbs={false}
            interval={7000}
            showStatus={false}
            autoPlay
            infiniteLoop
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt="carousel" />
            ))}
          </Carousel>
        </div>
        <div className="posts">
          <Carousel
            className="carousel"
            axis='vertical'
            showArrows={false}
            showThumbs={false}
            interval={13000}
            showStatus={false}
            autoPlay
            showIndicators={false}
            infiniteLoop
          >
            {posts.map((post, index) => (
              <div key={index}>
                <h1 className="hero-heading"> {post.title} </h1>{" "}
                <p>
                    {post.description}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="intro section">Intro</div>
      <div className="team section">Plasu Team</div>
      <div className="competitions section">Competitions</div>
      <div className="contact section">Contact Us</div>
    </div>
  );
};

export default HomePage;
