import React from 'react'
import TB from './TrainerBanner.module.css'

export default function TrainerBanner(props) {
    return (
        <section style={{
            background: `url(${props.url})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'cover',
            backgroundPosition: 'center',

        }}
        className={TB.trainer_banner_main}
        >
            <div>
                <h1> {props.h1} </h1>
                <h1> {props.h2} </h1>
                <button> JOIN NOW </button>
            </div>
        </section>
    )
}
