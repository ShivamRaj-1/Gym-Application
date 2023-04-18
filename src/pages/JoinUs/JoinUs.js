import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './JoinUs.module.css'

export default function JoinUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState(null)
    const [password, setPassword] = useState('')
    const [alreadyHave, setAlreadyHave] = useState(false)
    const [toHome, setToHome] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [found, setFound] = useState(false)
    const [clicked, setClicked] = useState(false)


    function handleAlreadyHave() {
        setAlreadyHave(true)
    }

    function handleRegister() {
        setToHome(true)
        const localStore = { name: name, email: email, mobile: mobile, password: password }
        const existingData = JSON.parse(localStorage.getItem('userData')) || [];
        localStorage.setItem('userData', JSON.stringify([...existingData, localStore]))

    }


    function handleLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'))
        let exist = false

        for (let i = 0; i < userData.length; i++) {

            if (userData[i].email == loginEmail && userData[i].password == loginPassword) {
                exist = true
                break
            }
        }

        if (exist) {
            setFound(true)
        } else {
            setFound(false)
        }

        setClicked(true)
        setLoginEmail('')
        setLoginPassword('')

    }



    return (
        <Fragment>
            {
                alreadyHave ?
                    <div className={styles.container}>

                        <div className={styles.details} >
                            <h1>Login Here</h1>
                            <div className={styles.input}>
                                <div >
                                    <label htmlFor="email"  >Email:</label>
                                    <input value={loginEmail} id='email' type='email' placeholder='Enter the mail' onChange={(event) => setLoginEmail(event.target.value)} ></input>
                                </div>
                                <div>
                                    <label htmlFor="password" >Password:</label>
                                    <input value={loginPassword} id='password' type='password' placeholder='Enter the password' onChange={(event) => setLoginPassword(event.target.value)}></input>
                                </div>
                            </div>
                            {
                              found ? <h1>Details found</h1> : clicked ? <p className={styles.warn}>Details not found ! please <h5 onClick={() => setAlreadyHave(false)}>Register</h5></p> : ''
                            }
                            <button onClick={handleLogin}>LOGIN</button>
                        </div>



                    </div> :

                    toHome ?
                        <div className={styles.container}>
                            <div className={styles.home}>
                                <h1>Successfully Registered !</h1>
                                <Link to='/' className={styles.link}><h1>HOME</h1></Link>
                            </div>
                        </div> :
                        <div className={styles.container}>
                            <div className={styles.details}>
                                <h1>Register Here</h1>
                                <div className={styles.input}>
                                    <div className={styles.data}>
                                        <label htmlFor="name" >Name:</label>
                                        <input required id='name' type='text' placeholder='Enter the Name' onChange={(event) => setName(event.target.value)}></input>
                                    </div>
                                    <div className={styles.data}>
                                        <label htmlFor="email"  >Email:</label>
                                        <input id='email' type='email' placeholder='Enter the Mail' onChange={(event) => setEmail(event.target.value)} ></input>
                                    </div>
                                    <div className={styles.data}>
                                        <label htmlFor="mobile" >Mobile:</label>
                                        <input id='mobile' type='tel' placeholder='Enter the Mobile' onChange={(event) => setMobile(event.target.value)} ></input>
                                    </div>
                                    <div className={styles.data}>
                                        <label htmlFor="password" >Password:</label>
                                        <input id='password' type='password' placeholder='Enter the Password' onChange={(event) => setPassword(event.target.value)}></input>
                                    </div>
                                </div>
                                <button onClick={() => handleRegister(name, email, mobile, password)}>Register</button>
                            </div>
                            <button onClick={handleAlreadyHave} >already have account ? Sign In</button>

                        </div>


            }

        </Fragment>
    )
}