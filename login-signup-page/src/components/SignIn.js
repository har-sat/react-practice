import React from "react";
import { Link } from 'react-router-dom';
import "../index.css";
export default function SignIn() {
    return (
        <div className="signin ">
           <h4 className="">Welcome back!</h4> 
           <input type="text" placeholder="E-mail"/>
           <input type="text" placeholder="Password"/>
           <button>Signin</button>
           <Link to = "/SignUp">Don't have an account? Sign up</Link>
        </div>
    )
}