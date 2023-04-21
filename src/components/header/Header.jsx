import React, { useState } from 'react';

// Dependencias
import './Header.css';
import logo from './img/logo-dummy-300x100.png';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook, faFontAwesome, faYoutubeSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faTwitter, faFontAwesome)

function Header() {
  // Create a state variable to keep track of the menu visibility
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  // Define a function to handle the trigger-menu click event
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  }
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  }
  return (
    <header>
        <div className='container-fluid wrapper-header'>
            <a href="#"><img src={logo} className="logo" alt="logo" /></a>
            <ul className={`menu ${menuVisible ? 'show' : ''}`}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Concepto</a></li>
                <li><a href="#">Fotos</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Contacto</a></li>
                <li className='hideMobile'><a href="#"><FontAwesomeIcon icon={faInstagram} className='social-icon instagram' /></a></li>
                <li className='hideMobile'><a href="#"><FontAwesomeIcon icon={faFacebookSquare} className='social-icon facebook' /></a></li>
                <li className='hideMobile'><a href="#"><FontAwesomeIcon icon={faYoutubeSquare} className='social-icon youtube' /></a></li>
                <li className='hideMobile'><a href="#"><FontAwesomeIcon icon={faTwitterSquare} className='social-icon twitter' /></a></li>
                <li className='hideDestop'>
                    <form>
                        <input type="text" className='searchInput' placeholder='Search' />
                    </form>
                </li>
            </ul>
            <a href="#" className='trigger-menu' onClick={handleMenuClick}><FontAwesomeIcon icon={menuVisible ? 'fa-times' : 'fa-bars'} /></a>
            <a href="#" className='trigger-search' onClick={handleSearchClick}><FontAwesomeIcon icon={searchVisible ? 'fa-times' : 'fa-search'} /></a>
        </div>
        <div className={`searchContainer ${searchVisible ? 'show' : ''}`}>
            <div className="searchInputWrapper">
                <form>
                    <input type="text" className='searchInput' placeholder='Search' />
                </form>
            </div>
        </div>
    </header>
  );
}

export default Header;