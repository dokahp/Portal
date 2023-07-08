import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import HouseIcon from '../../assets/house-icon.svg';

function Header() {
  return (
    <header className="header">
      <Link className="logo-link" to="/">
        <img className="logo-img" src={HouseIcon} alt="logo-icon" />
        <span className="logo">Ўсё.бай</span>
      </Link>
      <nav className="main-menu">
        <ul className="main-menu__list">
          <li className="main-menu__item">
            <span className="main-menu__text">Купить</span>
          </li>
          <li className="main-menu__item">
            <span className="main-menu__text">Снять</span>
          </li>
          <li className="main-menu__item">
            <span className="main-menu__text">Новостройки</span>
          </li>
          <li className="main-menu__item">
            <span className="main-menu__text">Коммерческая</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
