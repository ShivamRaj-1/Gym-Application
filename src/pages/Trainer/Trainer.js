import React from 'react'
import TS from './Trainer.module.css'
import TrainerCard from '../../component/TrainerCard/TrainerCard'

export default function Trainer() {
  return (
    <div id='trainer' className={TS.trainer_mainBackground}> 
        <div className={TS.trainer_container}>

          <div className={TS.heading_part}>
            <h1>Meet <span>Our</span> Team </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius voluptatibus quo dignissimos quis voluptates, commodi culpa neque. Numquam dolor eos et fugiat, repellendus sint temporibus incidunt ullam nisi odio!</p>
          </div>

          <div className={TS.card_container}>
            <TrainerCard />
          </div>

          <div className={TS.button_part}>
            <button>SEE THE WHOLE TEAM</button>
          </div>

        </div>
    </div>
  )
}
