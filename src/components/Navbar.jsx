import React from 'react'
import HamburgerOpen from '../assets/icon-hamburger.svg'
import HamburgerClose from "../assets/icon-close.svg"


function Navbar({handleClick, menu}) {
  return (
    <header>
        <p className='header--title'>Nftstreet</p>
        <img src={menu ?  HamburgerClose :  HamburgerOpen} alt="" onClick={handleClick} className="mobile-nav-toggle" />
    
         <nav>
            <ul className={menu ? "nav-menu active"  : "nav-menu"}>
                <li className='nav-item'><a href="#">Home</a></li>
                <li className='nav-item'><a href="#">Explore</a></li>
                <li className='nav-item'><a href="#">Community</a></li>
                <li className='nav-item'><a href="#">Activity</a></li>
            </ul>
        </nav>

        <div className="cta">
            <button className="cta-btn btn--pink">
                <i className="fa-solid fa-wallet"></i>
                <span>Connect Wallet</span>  
            </button>
        </div>
    </header>
  )
}

export default Navbar