import React from 'react'
import TB from './TrainerBanner.module.css'

export default function TrainerBanner() {
    return (
        <section style={{
            background: 'url("https://preview.colorlib.com/theme/gym2/img/banner/big_offer.png.webp")',
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'cover',
            backgroundPosition: 'center',

        }}
        className={TB.trainer_banner_main}
        >
            <div>
                <h1> A BIG OFFER FOR </h1>
                <h1> THIS SUMMER </h1>
                <button> JOIN NOW </button>
            </div>
        </section>
    )
}
