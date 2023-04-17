import React, { Fragment } from "react";
import style from "./Home.module.css";
import Button from "@mui/material/Button";
import TrainingProgram from "../trainingProgram/TrainingProgram";
import { slideData } from "../../utills/HomePageSliderData.js";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

export default function Home() {
const [slideValue,setSlideValue] = useState(0);


const handleSlideChangeLeft =()=>{
  setSlideValue((slideValue+1)%slideData.length )
}
const handleSlideChangeRight =()=>{
  setSlideValue((slideValue-1) )
}


  return (
    <Fragment>
      {/* <ImageSlider text={slideData.text} /> */}
      {/* <Slider />
      <Slider />
      <Slider /> */}
      {/* {slideData.map((ele,index)=>{
        return(
          <Slider index={index}/>
        )
      })} */}
      
      <button onClick={handleSlideChangeLeft}><MdArrowBackIosNew/></button>
          <Slider index={slideValue}/>
      <button onClick={handleSlideChangeRight}><MdArrowForwardIos/></button>

      <TrainingProgram />
    </Fragment>
  );
}

export function ImageSlider() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        {slideData.map((ele) => {
          return (
            <div>
              <h1 className={style.text}>
                {ele.text}
                {/* "Take care of your <span>body</span> it's <br />
      the only place have to <span>live</span>." */}
              </h1>
              <Button variant="contained" color="success">
                Join With Us
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Slider({index}) {
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
