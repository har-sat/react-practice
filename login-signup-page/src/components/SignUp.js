import React from "react";

export default function SignUp() {
    return (
        <div className="signin">
           <h4>Signup for Great Rewards!</h4> 
           <input type="text" placeholder="Username"/>
           <input type="text" placeholder="E-mail"/>
           <input type="text" placeholder="Password"/>
           <button>Signup</button>
           <a>Already have an account? Signin </a>
        </div>
    )
}