import React from "react";
import { Link } from "react-router-dom"

export default function SignUp() {
    return (
        <div className="signin">
           <h4>Signup for Great Rewards!</h4> 
           <input type="text" placeholder="Username"/>
           <input type="text" placeholder="E-mail"/>
           <input type="text" placeholder="Password"/>
           <button>Signup</button>
           <Link to = "/SignIn" >Already have an account? Signin </Link>
        </div>
    )
}