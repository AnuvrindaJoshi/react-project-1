import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){

const[click, setClick]=useState(false);
const handleClick=()=>{
setClick(!click)
}

    return(
        <>
        <nav className="navbar">
<div className="nav-container">
    <Link to='/' className="nav-logo">Digiency</Link>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item"><Link to='/' className="nav-links">Home</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">About Us</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Our Work</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Clients</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Our Blogs</Link></li>
        <li className="nav-item"><Link to='/' className="nav-links">Contact Us</Link></li>
    </ul>

<div className='nav-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
</div>


</div>
        </nav>
        </>
    )
}

export default Navbar;