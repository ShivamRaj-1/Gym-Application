import React from 'react'
import TCS from './TrainerCard.module.css'
import { Trainer_details } from '../../utils/Trainer_details'

export default function TrainerCard() {
    return (
        <div className={TCS.card_main}>
            {
                Trainer_details.map((elem) => {
                    return (
                        <div className={TCS.main_box}>
                            <div className={TCS.image_div}>
                                <img src={elem.url} alt="" />
                            </div>

                            <a href={`#trainer${elem.id}`}>
                                <div className={TCS.box_content}>
                                    <h3>{elem.name}</h3>
                                    <p>{elem.coach}</p>
                                </div>
                            </a>

                        </div>
                    )
                })
            }
        </div>
    )
}
