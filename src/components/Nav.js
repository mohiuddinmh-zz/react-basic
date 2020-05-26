import React from 'react'
import { Link } from 'react-router-dom'
import './myStyles.css'

const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to='/asma'>
                    <li className='nav-link'>Pyari</li>
                </Link>
                <Link to='/fatima'>
                    <li className='nav-link'>Fatima</li>
                </Link>
                <Link to='/yousuf'>
                    <li className='nav-link'>Yousuf</li>
                </Link>
                <Link to='/adder'>
                    <li className='nav-link'>Adder</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;