import React, { Fragment, useEffect } from "react";
import style from "./Home.module.css";
import Button from "../../component/button/Button";
import TrainingProgram from "../trainingProgram/TrainingProgram";
import { slideData } from "../../utils/HomePageSliderData.js";
import { useState } from "react";
import { useNavigate } from "react-router";


// import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";


export default function Home() {

  return (
    <Fragment>
      <div>
      <ImageSlider />
      </div>
      <div>

      <TrainingProgram />
      </div>
    </Fragment>
  );
}

export function ImageSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
 const navigate= useNavigate()

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

  const pageToJoin =()=>{
    navigate('./joining')
  }

  return (
    <div className={style.containerStyles}>
      <div style={bgImageStyle}></div>
      <div className={style.transparentBackground}></div>
      <div className={style.des_carousal}>

      <div className={style.description}>
        <h1>{slideData[currentSlideIndex].text}</h1>
        {/* <p>{slideData[currentSlideIndex].body}</p> */}
        <Button name='Join With Us'
        onClick={pageToJoin}
        />
      </div>
      {/* <div className={style.carousal}>
        {slideData.map((slideData, currentSlideIndex) => (
          <span
            key={currentSlideIndex}
            onClick={() => goToNext(currentSlideIndex)}
          ></span>
        ))}
      </div> */}
      </div>
    </div>
  );
}

