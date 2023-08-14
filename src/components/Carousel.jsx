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

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    setCarouselData(projects);
  }, []);

  return (
    <div classname={styles.container}>
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
          return (
            <SwiperSlide
              style={{
                backgroundImage:
                  "linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.6)), url(" +
                  item.image_url +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "500px",
              }}
            >
              <div className="swiperTextbox">
                <h1>{item.Title}</h1>
                <h1>{item.Subtitle}</h1>
                <Link to="/contact-us">
                  <button className="carouselButton">Contact us</button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
