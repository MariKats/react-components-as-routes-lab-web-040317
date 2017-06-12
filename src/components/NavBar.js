import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/directors">Directors</Link></li>
        <li><Link to="/actors">Actors</Link></li>
      </ul>
  </div>
  );
};

export default NavBar;
