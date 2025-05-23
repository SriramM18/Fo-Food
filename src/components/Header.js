import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";



const Header = () =>{
    const [loginBtn, setLoginBtn] = useState("Login");
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src= {LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>loginBtn === 'Login'? setLoginBtn('Logout') : setLoginBtn('Login')} className="login-btn">{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;