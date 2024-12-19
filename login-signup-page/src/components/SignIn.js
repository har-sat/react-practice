import React from "react";
import { Link } from 'react-router-dom';
import "../index.css";
export default function SignIn() {

    const [userInfo, setUserInfo] = React.useState({
        email :"",
        password : ""
    })

    function handleChange(event) {
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, [event.target.name]: event.target.value }))
    }

    // console.log(userInfo)
    return (
        <div className="signin ">
           <h4 className="">Welcome back!</h4> 
           <form>
                <input 
                    type="email" 
                    placeholder="E-mail"
                    name = "email"
                    onChange = {handleChange}
                    value = {userInfo.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name = "password"
                    onChange = {handleChange}
                    value = {userInfo.password}
                />
                <br />
                <button>Signin</button>
           </form>
           <Link to = "/SignUp">Don't have an account? Sign up</Link>
        </div>
    )
}