import React from 'react'
import { Link } from 'react-router-dom'



class Links extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
          <a class="navbar-brand" href="/home">LogoHome</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navb" class="navbar-collapse collapse hide">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/home" className="nav-link ">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/myFeed" className="nav-link">My Feed</Link>
              </li>
            </ul>

            <ul class="nav navbar-nav ml-auto ">
              <li class="nav-item">
                <Link to="/signup" className="nav-link btn btn-outline-secondary">SignUp</Link>
              </li>
              <li class="nav-item">
                <li><Link to="/login" className="nav-link btn btn-outline-secondary">Login</Link></li>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Links;
