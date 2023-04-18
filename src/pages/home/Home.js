import React, { Fragment, useEffect } from "react";
import style from "./Home.module.css";
import Button from "@mui/material/Button";
import TrainingProgram from "../trainingProgram/TrainingProgram";
import { slideData } from "../../utills/HomePageSliderData.js";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { height } from "@mui/system";

export default function Home() {
  const [slideValue, setSlideValue] = useState(0);

  const handleSlideChangeLeft = () => {
    setSlideValue((slideValue + 1) % slideData.length);
  };
  const handleSlideChangeRight = () => {
    setSlideValue(slideValue - 1);
  };

  return (
    <Fragment>
      <ImageSlider />
      {/* <button onClick={handleSlideChangeLeft}>
        <MdArrowBackIosNew />
      </button>
      <Slider index={slideValue} />
      <button onClick={handleSlideChangeRight}>
        <MdArrowForwardIos />
      </button>
      <TrainingProgram /> */}
    </Fragment>
  );
}

export function ImageSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlideIndex === 2) {
        setCurrentSlideIndex(0);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  const bgImageStyle = {
    backgroundImage: `url(${slideData[currentSlideIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  const goToNext = (currentSlideIndex) => {
    setCurrentSlideIndex(currentSlideIndex);
  };

  return (
    <div className={style.containerStyles}>
      <div style={bgImageStyle}></div>
      <div className={style.transparentBackground}></div>
      <div className={style.description}>
       
          <h1>{slideData[currentSlideIndex].text}</h1>
          <p>{slideData[currentSlideIndex].body}</p>
          <Button variant="contained" color="success">
            Join With Us
          </Button>
        
      </div>
        <div className={style.carousal}>
          {slideData.map((slideData, currentSlideIndex) => (
            <span
              key={currentSlideIndex}
              onClick={() => goToNext(currentSlideIndex)}
            ></span>
          ))}
        </div>
    </div>
  );
}

export function Slider({ index }) {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.text}>
          {slideData[index].text}
          {/* "Take care of your <span>body</span> it's <br />
          the only place have to <span>live</span>." */}
        </h1>
        <Button variant="contained" color="success">
          Join With Us
        </Button>
      </div>
    </div>
  );
}
