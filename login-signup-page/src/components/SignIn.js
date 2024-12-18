import React from "react";
import "../index.css"
export default function SignIn() {
    return (
        <div className="signin">
           <h4>Welcome back!</h4> 
           <input type="text" placeholder="E-mail"/>
           <input type="text" placeholder="Password"/>
           <button>Signin</button>
           <a>Don't have an account? Sign up</a>
        </div>
    )
}