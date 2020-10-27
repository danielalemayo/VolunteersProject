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
                <li>Volunteer</li>
                <li>Volunteer</li>
                <li>Volunteer</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
  
  );
}
export default Footer;