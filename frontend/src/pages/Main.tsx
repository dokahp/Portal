import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div>Main Page</div>
      <Link to="/sale">
        <div>Sale</div>
      </Link>
      <Link to="/rent">
        <div>Rent</div>
      </Link>
    </>
  );
}

export default Main;
