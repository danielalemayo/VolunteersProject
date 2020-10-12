import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
          <a className="navbar-brand" href="/home">LogoHome</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navb" className="navbar-collapse collapse hide">
            <ul className="navbar-nav">
              <li key="1" className="nav-item">
                <Link to="/home" className="nav-link ">Home</Link>
              </li>
              <li key="2" className="nav-item">
                <Link to="/myFeed" className="nav-link">My Feed</Link>
              </li>
            </ul> 
            <ul className="nav navbar-nav ml-auto ">
              <li key="3" className="nav-item">
                <Link to="/signup" className="nav-link btn btn-outline-secondary">SignUp</Link>
              </li>
              <li key="4" className="nav-item">
                <li key="5" ><Link to="/login" className="nav-link btn btn-outline-secondary">Login</Link></li>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Links;
