import React, { Fragment, useState } from "react";
import "../../App.css";
import styles from "./TrainingProgram.module.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";

export const data = [
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
  {
    img: "./gymnastic.jpg",
    text: "Gymnastic",
  },
];
export default function TrainingProgram() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChangeLeft = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 3 : currentIndex - 1);
  };

  const handleSlideChangeRight = () => {
    setCurrentIndex(currentIndex === data.length - 3 ? 0 : currentIndex + 1);
  };
  console.log(currentIndex);

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h2>Training Program</h2>
        <div className={styles.carousal_div}>
          {data.slice(currentIndex, currentIndex + 3).map((ele, index) => {
            return (
              <div
                key={index}
                className={styles.carousal}
                //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
              >
                <b className={styles.imgText}>{ele.text}</b>
                <img src={ele.img} alt={`Slide${index}`} />
              </div>
            );
          })}
        </div>
        <div className={styles.buttonContainer}>
            <MdArrowBackIosNew  className={styles.icon}
        onClick={handleSlideChangeLeft}

            />
          
          <span>
            See All <FiArrowRightCircle />
          </span>
            <MdArrowForwardIos className={styles.icon}
        onClick={handleSlideChangeRight}

            />
          
        </div>
      </div>
    </Fragment>
  );
}
