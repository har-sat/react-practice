import React from "react"
import logo from "../assets/sidenigga.jpeg";
import "../index.css"
export default function Navbar() {
    return (
        <div className = "h-10 align-top bg-slate-500">
            <img src = {logo} className = "Navbar-logo" />
            SideNiggaWeb
        </div>
    )
}
