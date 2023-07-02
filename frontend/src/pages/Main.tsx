import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <h1>Main Page</h1>
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
