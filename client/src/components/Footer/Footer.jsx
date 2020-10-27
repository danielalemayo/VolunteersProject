import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="container">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>Location - Lod,israel</li>
              <li>email -Volunteer20@gmail.com</li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About Volunteer</h5>
            <ul className="list-unstyled text-small">
              <li>The LightBack Association manages the connections between volunteers and volunteering events.</li>
              <li>Our association is an independent community that aims to improve the matching between volunteers and volunteer events.</li>
              <li>By improving the match between volunteers and events, we can make the world a better place, one community at a time.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

  );
}
export default Footer;