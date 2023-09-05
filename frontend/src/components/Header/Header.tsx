import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CottageIcon from '@mui/icons-material/Cottage';
import CarRentalIcon from '@mui/icons-material/CarRental';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import TodayIcon from '@mui/icons-material/Today';
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
            <div className="main-menu__content">
              <div className="row">
                <div className="column">
                  <ApartmentIcon color="primary" className="main-menu__icons" />
                  <div className="main_menu__links-wrapper">
                    <Link to="/" className="main_menu__title">
                      Квартиры
                    </Link>

                    <ul className="column-list">
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          1-комнатные
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          2-комнатные
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          3-комнатные
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          4-комнатные
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Новостройки
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Комнаты в квартире
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column">
                  <CottageIcon color="primary" className="main-menu__icons" />
                  <div className="main_menu__links-wrapper">
                    <Link to="/" className="main_menu__title">
                      Дома
                    </Link>

                    <ul className="column-list">
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Участки
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Дачи
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Коттеджи
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column">
                  <CarRentalIcon color="primary" className="main-menu__icons" />
                  <div className="main_menu__links-wrapper">
                    <Link to="/" className="main_menu__title">
                      Гаражи
                    </Link>
                    <ul className="column-list">
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Парковочные места
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="main-menu__item">
            <span className="main-menu__text">Снять</span>
            <div className="main-menu__content">
              <div className="row">
                <div className="column">
                  <MoreTimeIcon color="primary" className="main-menu__icons" />
                  <div className="main_menu__links-wrapper">
                    <Link to="/" className="main_menu__title">
                      Долгосрочная аренда
                    </Link>

                    <ul className="column-list">
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          1-комнатные квартиры
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          2-комнатные квартиры
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          3-комнатные квартиры
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          4-комнатные квартиры
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Комнаты в квартире
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Коттеджи и дома
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column">
                  <TodayIcon color="primary" className="main-menu__icons" />
                  <div className="main_menu__links-wrapper">
                    <Link to="/" className="main_menu__title">
                      На сутки
                    </Link>

                    <ul className="column-list">
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Квартиры
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Коттеджи и дома
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column">
                  <CarRentalIcon color="primary" className="main-menu__icons" />
                  <div className="main_menu__links-wrapper">
                    <Link to="/" className="main_menu__title">
                      Гаражи
                    </Link>
                    <ul className="column-list">
                      <li className="column-list-item">
                        <Link to="/" className="column-list-link">
                          Парковочные места
                        </Link>
                        <span className="column-list-count">104</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
