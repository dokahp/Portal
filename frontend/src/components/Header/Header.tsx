import React from 'react';
import './header.scss';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import NewAnnouncementBtn from '../NewAnnouncementBtn/NewAnnouncementBtn';

function Header() {
  return (
    <header className="header">
      <div className='header-left-wrapper'>
        <Logo />
        <NavMenu />
      </div>
      <NewAnnouncementBtn />
    </header>
  );
}

export default Header;
