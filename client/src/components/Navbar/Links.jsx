import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <a className="navbar-brand" href="/home">LogoHome</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div id="navb" className="navbar-collapse collapse hide">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link ">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/myFeed" className="nav-link">My Feed</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav ml-auto ">
            <li className="nav-item">
              <Link to="/signup" className="nav-link btn btn-outline-secondary">SignUp</Link>
            </li>
            <li className="nav-item">
              <li><Link to="/login" className="nav-link btn btn-outline-secondary">Login</Link></li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Links;
