import React from "react"
import logo from "../assets/sidenigga.jpeg";
import "../index.css";


export default function Navbar() {
    return (
        <div className = "navbar">
            <img src = {logo} className = "Navbar-logo" />
            SideNiggaWeb
        </div>
    )
}
