import React, { Fragment } from "react";
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
