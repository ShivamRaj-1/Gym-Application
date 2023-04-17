import React from 'react'
import TS from './Trainer.module.css'
import TrainerMain from '../../component/TrainerMain/TrainerMain'

export default function Trainer() {
    const show = false;
  return (
    <div className={TS.trainer_mainBackground}>
        <TrainerMain show={show} />

        <div>
            
        </div>

    </div>
  )
}
