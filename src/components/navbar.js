/* eslint-disable */

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MdClose} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi';

function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = ()=>{
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = ()=>{
        setNavbarOpen(false);
    }

    return (
        <nav className='navbar'>
            <button onClick={handleToggle}>
                {
                    navbarOpen ? <MdClose style={{color:"#fff", width:"40px", height:"40px"}}/>
                    : <FiMenu style={{color:"#7b7b7b", width:"40px", height:"40px"}}/>
                }
            </button>
            <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
            <li><Link to="/" onClick={()=> closeMenu()} exact="true">Home</Link></li>
        <li onClick={()=>closeMenu()} exact="true"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;