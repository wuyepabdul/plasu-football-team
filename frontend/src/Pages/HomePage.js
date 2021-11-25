import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import football1 from "../images/football-pitch1.jpg";
import football2 from "../images/football-pitch2.jpg";
import plasuTeam from "../images/plasuTeam.jpg";
import ball from "../images/ball.jpg";

const HomePage = () => {
  const images = [plasuTeam,football1, football2, ball];
  return (
    <div className="home">
      <div className="hero-container">
        <div className="hero section">
          <Carousel className="carousel" showArrows={true} showThumbs={false} sho showStatus={true} autoPlay infiniteLoop >
            {images.map((image, index) => (
              <img key={index} src={image} alt="carousel" />
            ))}
          </Carousel>
        </div>
        {/* <h1 className="hero-heading">Hero section</h1> */}
        {/* <div className="posts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            eius fugit. Totam error harum repellat libero voluptas eveniet!
            Rerum quaerat similique nihil incidunt repellat! Illo culpa
            distinctio perspiciatis dolor ipsa.
          </p>
        </div> */}
      </div>
      <div className="intro section">Intro</div>
      <div className="team section">Plasu Team</div>
      <div className="competitions section">Competitions</div>
      <div className="contact section">Contact Us</div>
    </div>
  );
};

export default HomePage;
