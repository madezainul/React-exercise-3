import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="row align-items-start">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/movies/create">Add Movies</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Add Genres</Link></li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
