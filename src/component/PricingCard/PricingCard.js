import React from 'react'
import PC from './PricingCard.module.css'
import {pricingCardData} from '../../utils/Pricing_card_data'

export default function PricingCard() {
  return (
    <div className={PC.pricing_card_main}>
        {
            pricingCardData.map((elem)=>{
                return (
                    <div className={PC.pricing_card_box}>
                        <img src={elem.img} alt="" /> 
                        <h2>{elem.heading}</h2> 
                        <p>{elem.description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
