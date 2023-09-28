import React from 'react';
import { Link } from 'react-router-dom';
import HouseIcon from '../../assets/house-icon.svg';

export default function Logo() {
  return (
    <Link className="logo-link" to="/">
      <img className="logo-img" src={HouseIcon} alt="logo-icon" />
      <span className="logo">Ўсё.бай</span>
    </Link>
  );
}
