import React from 'react';
import './Header.css';
import alchemy_logo from '../assets/logos/Title_logo.png';
import game_image from '../assets/img/image_jeu.png';

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={alchemy_logo} alt="Alchemy Logo" />
        <img src={game_image} alt="Game " />
      </div>
    </header>
  );
}

export default Header;