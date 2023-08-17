import React, { useState, useEffect } from "react";
import "./stylesheets/Carousel.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "./stylesheets/Carousel.css";
import projects from "../resources/projects";

import image1 from "../resources/images/CarouselImages/1.jpg";
import image2 from "../resources/images/CarouselImages/2.jpg";
import image3 from "../resources/images/CarouselImages/3.jpg";
import image4 from "../resources/images/CarouselImages/4.jpg";
import image5 from "../resources/images/CarouselImages/5.jpg";
import image6 from "../resources/images/CarouselImages/6.jpg";
import image7 from "../resources/images/CarouselImages/7.jpg";

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]);

  useEffect(() => {
    setCarouselData(projects);
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        classname={styles.myswiper}
      >
        {carouselData.map((item) => {
          let media = <></>;
          if (item.image_url && item.video_url) {
            media = (
              <li>
                <img src={item.image_url} alt={item.name} />
              </li>
            );
          } else if (item.image_url) {
            media = (
              <li>
                <img src={item.image_url} alt={item.name} />
              </li>
            );
          } else if (item.video_url) {
            media = (
              <li>
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${item.video_url}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </li>
            );
          } else {
            media = <p>Nothing to see here...</p>;
          }

          return (
            <SwiperSlide
              style={{
                backgroundImage:
                  "linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.6)), url(" +
                  carouselImages[
                    Math.floor(Math.random() * carouselImages.length)
                  ] +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "space-around",
              }}
            >
              <div className="swiperContent">
                <div className="swiperTextbox">
                  <h1>
                    {item.name} - {item.language}
                  </h1>
                  <h4>{item.description}</h4>
                </div>
                <Link to="/projects">
                  <button id="box1button">Learn more</button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
