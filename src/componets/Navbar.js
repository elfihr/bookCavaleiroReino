import React from 'react'
import '../style/Navbar.css'
import { menuLinks } from '../helper/helper'
import { Twirl as Hamburger } from 'hamburger-react'
import logoico from '../assets/logo.JPG'


const Navbar = () => {
    return (


        <nav className='navMenu'>
            {/* ====/Logo==== */}
            <div className='logoContainer'>
                <img src={logoico} alt='logo' />
                <h3 className='logo'>Editora DiPaula</h3>
            </div>


            {/* ====/Icons==== */}
            <input type='checkbox' id='check'></input>
            <label htmlFor='check' className='iconMenu' >
                <Hamburger />
            </label>
            {/* ====/HiperLinks==== */}
            <div className='navBar'>
                {menuLinks.map((link, index) => {
                    return (


                        <ul key={index}>
                            <li className='navlinks'>
                                <a href={link.href} className={link.class}>{link.label}</a>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </nav>

    )
}


export default Navbar