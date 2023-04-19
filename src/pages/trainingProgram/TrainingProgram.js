import React, { Fragment, useEffect, useState } from "react";
import "../../App.css";
import styles from './TrainingProgram.module.css';


export default function TrainingProgram() {
  const data = [
    {
      img: "./yoga.jpg",
      text: "Yoga",
    },
    {
      img: "./body building.jpg",
      text: "Body Building",
    },
    {
      img: "./aerobic.jpg",
      text: "Aerobic",
    },
    {
      img: "./flexibility.jpg",
      text: " Flexibility",
    },
    {
      img: "./cardio.jpg",
      text: "Cardio",
    },
  ];
//   const bgImageStyle = {
//     backgroundImage: `url(${slideData[currentSlideIndex].url})`,
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     height: "100%",
//   };

// const [currentIndex,setCurrentIndex]=useState(0);
//   useEffect(()={},[])


  return (
    <Fragment>
      <h3>Training Program</h3>
      <div className={styles.carousal_div} > 
        {data.map((ele) => {
          return (
            <div
              className={styles.carousal}
            //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
            >
              <b className={styles.imgText} >{ele.text}</b>
            <img src={ele.img} alt=""/>
            </div>
          );
        })}
      </div>
{/* <img src="./aerobic.jpg"  height='200px' width="200px" alt="" /> */}
    </Fragment>
  );
}
