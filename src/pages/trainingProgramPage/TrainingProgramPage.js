import React, { Fragment } from 'react'
import TrainerBanner from '../../component/TrainerBanner/TrainerBanner'
import Background from '../../component/Background/Background'
import TrainingProgram from '../../component/trainingProgram/TrainingProgram.js'
import styles from './TrainingProgramPage.module.css'


export default function TrainingProgramPage() {
  return (
    <Fragment>
    <div className={styles.transparentBackground}></div>
<Background
    heading={"Our Training Program"}
    imgUrl={'./Programpage.jpg'}
/>
<TrainingProgram />
<TrainerBanner
    h1={'Wake up. Work out. Look hot.'}
    h2={'Kick ass. Your fears'}
    url={'./prorgram.jpg'}
/>

    </Fragment>
  )
}
