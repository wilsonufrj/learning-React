import React from 'react'
import { Nav, Navbar,NavbarToggler,NavbarText } from 'reactstrap'
import './style.css'


const NavBar = () => {
    return (
        <div id='header' className='p-1'>
            <nav className='navbar navbar-expand justify-content-center'>
                <img className='navbar-brand' src="https://img.elo7.com.br/product/original/28E57D8/pokebola-eva.jpg" width='175px'/>
                <h2 id='titulo' className='m-4'>Pokemon</h2>
            </nav>
        </div>
    )
}

export default NavBar