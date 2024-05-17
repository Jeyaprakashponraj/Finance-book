import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Style from "./Hero.module.css";
import { HeroData } from "../Utills/HeroData";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [key, setKey] = useState(0);
  const [NextImage, setNextImage] = useState(1);
  const [lastImage, SetLastImage] = useState(0);

  useEffect(() => {
    AOS.init();
    if (animate) {
      setAnimate(false);
    }
  }, [animate]);

  useEffect(() => {
    if (animate) {
      AOS.refresh();
      setAnimate(false);
    }
  }, [animate]);

  const NextButton = () => {
    if (currentIndex < 3) {
      setCurrentIndex((prev) => prev + 1);
      setAnimate(true);
      setKey((prev) => prev + 1);
      setNextImage((prev) => prev + 1);
      SetLastImage(prev + 1);
    }
  };

  const PrevButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setAnimate(true);
      setKey((prev) => prev + 1);
      setNextImage((prev) => prev - 1);
      SetLastImage(prev - 1);
    }
  };

  const currentItem = HeroData[currentIndex];
  return (
    <div key={key} className={Style.slide__container}>
      <div className={Style.slide__list}>
        <div className={Style.slide__item}>
          <img
            src={currentItem.img}
            alt={currentItem.alt}
            data-aos={animate ? "zoom-out" : ""}
            data-aos-once='true'
            data-aos-duration='1000'
            data-aos-easing='ease-in-sine'
          />
          <div className={Style.slide__content}>
            <div
              className={Style.slide__title}
              data-aos={animate ? "fade-up" : ""}
              data-aos-once='true'
              data-aos-duration='1000'
            >
              {currentItem.title}
            </div>
            <div
              className={Style.slide__type}
              data-aos={animate ? "fade-up" : ""}
              data-aos-once='true'
              data-aos-duration='2000'
            >
              {currentItem.type}
            </div>
            <div
              className={Style.slide__description}
              data-aos={animate ? "fade-up" : ""}
              data-aos-once='true'
              data-aos-duration='2500'
            >
              {currentItem.description}
            </div>
            <div className={Style.slide__button}>
              <button
                onClick={NextButton}
                data-aos={animate ? "flip-up" : ""}
                data-aos-once='true'
                data-aos-duration='1000'
              >
                Explore Now ...
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.slide__nextPrevButton}>
        <button onClick={PrevButton} className={Style.slide__prev}>
          {"<"}
        </button>
        <button onClick={NextButton} className={Style.slide__next}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
