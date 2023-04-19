import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../button/Button'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <Link to={'/'}><img src="https://1000logos.net/wp-content/uploads/2021/07/Michigan-State-Spartans-logo.png" alt="spartanFitness" /></Link>
      <ul> 
        <li><Link to={'/about'} className={styles.link}>AboutUs</Link></li> 
        <li><Link to={"/program"} className={styles.link}>Programs</Link></li> 
        {/* <li><Link to= {'trainer'} className={styles.link}> Trainers</Link></li>  */}
        <li><a href='#trainer' className={styles.link}>Trainers</a></li>
        <li><Link to={'/pricing'} className={styles.link}>Pricing</Link></li> 
      </ul>
      <Link to={'/joining'}><Button name= 'Join Us'/></Link>
    </nav>
  )
}
