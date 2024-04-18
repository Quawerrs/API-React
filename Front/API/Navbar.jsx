
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <Link to="/ajouter">
        <button style={{ margin: '10px' }}>Ajouter</button>
      </Link>
      <Link to="/voir">
        <button style={{ margin: '10px' }}>Voir</button>
      </Link>
    </div>
  );
};

export default NavBar;