import React from "react";
import { Link } from "react-router-dom"

export default function SignUp() {
    const [userInfo , setUserInfo] = React.useState(
        {
            username : "",
            email : "",
            password : ""
        }
    )
    // console.log(userInfo)

    function handleChange(event) {
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, [event.target.name] : event.target.value}))
    }

    return (
        <div className="signin">
           <h4>Signup for Great Rewards!</h4>
           <form >
            <input  
                type="username" 
                name = "username"
                placeholder="Username"
                onChange={handleChange}
                value = {userInfo.username}
             />
            <input 
                type="email" 
                name = "email"
                placeholder="E-mail"
                onChange = {handleChange}
                value = {userInfo.email}
            />
            <input 
                type="password"
                name = "password" 
                placeholder="Password"
                onChange = {handleChange}
                value= {userInfo.password}
            />
            <br />
            <button>Signup</button>
           </form>
           <Link to = "/SignIn" >Already have an account? Signin </Link>
        </div>
    )
}