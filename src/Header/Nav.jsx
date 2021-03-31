import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div className="nav-container">
      <div className="nav-dashboard">
        <Link to="/dashboard">
          Dashboard
        </Link>
      </div>
      <div>
        <Link to="/owner">
          Manage Owners
        </Link>
      </div>
    </div>
  )
}

export default Nav;