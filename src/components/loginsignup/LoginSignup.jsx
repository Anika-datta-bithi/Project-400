import React from 'react'
import './LoginSignup.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'


const LoginSignup = () => {
    return (
        <div className='container'>

            <div className="header">

                <div className="text">Sign Up</div>
                <div className="underline"></div>


                <div className="Inputs">
                    <div className="input">
                        <img src={user_icon} alt="" className="" />
                        <input type="text" placeholder="First Name" className="text" />
                    </div>
                </div>
                <div className="Inputs">
                    <div className="input">
                        <img src={user_icon} alt="" className="" />
                        <input type="text" placeholder="Last Name" className="text" />
                    </div>
                </div>
                <div className="Inputs">
                    <div className="input">
                        <img src={email_icon} alt="" className="" />
                        <input type="email" placeholder="Email" className="text" />
                    </div>
                </div>
                <div className="Inputs">
                    <div className="input">
                        <img src={password_icon} alt="" className="" />
                        <input type="password" placeholder="Password" className="text" />
                    </div>
                </div>
                <div className="Inputs">
                    <div className="input">
                        <img src={password_icon} alt="" className="" />
                        <input type="password" placeholder="Confirm Password" className="text" />
                    </div>
                </div>
                <div className="forgot-password">Lost Password ?<span>Click Here</span></div>
                <div className="submit-container">
                    <div className="submit">
                        SignUp
                    </div>
                    <div className="submit">
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup