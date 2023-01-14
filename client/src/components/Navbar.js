import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="row align-items-start">
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top px-4 py-0">
          <div className="navbar-nav align-items-center mr-auto">
            <Link href="#" className="nav-link">Home</Link>
          </div>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="#" className="nav-link">+ Add Movies</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">+ Add Genres</Link>
                </li>
                <span></span>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
