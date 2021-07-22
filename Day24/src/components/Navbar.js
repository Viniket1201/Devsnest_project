import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
     <nav>
         <NavLink to="/home">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/services">Services</NavLink>
         <NavLink to="/contact">Contact</NavLink>
     </nav>
    )
}