import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <>
        <nav className="navbar">
<div className="nav-container">
    <Link to='/' className="nav-logo">Digiency</Link>
    <ul>
        <li className="nav-item"><Link to='/' className="nav-links">Home</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">About Us</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Our Work</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Clients</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Our Blogs</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Contact Us</Link></li>
    </ul>


</div>
        </nav>
        </>
    )
}

export default Navbar;