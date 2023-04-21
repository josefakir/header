import React, { useState } from 'react';

// Dependencias
import './Header.css';
import logo from './img/logo.png';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faTwitter, faFontAwesome)

function Header() {
  // Create a state variable to keep track of the menu visibility
  const [menuVisible, setMenuVisible] = useState(false);

  // Define a function to handle the trigger-menu click event
  const handleMenuClick = () => {
    // Toggle the menu visibility
    setMenuVisible(!menuVisible);
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
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} className='social-icon' /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} className='social-icon' /></a></li>
            </ul>
            <a href="#" className='trigger-menu' onClick={handleMenuClick}><FontAwesomeIcon icon={menuVisible ? 'fa-times' : 'fa-bars'} /></a>
            <a href="#" className='trigger-search'><FontAwesomeIcon icon="fa-search" /></a>
        </div>
    </header>
  );
}

export default Header;