import React from 'react';

// import { Redirect } from 'react-router-dom';

import logo from '../../img/LightBackLogo.png';
import CarouselPhotos from './CarouselPhotos'
import './LandingPage.css'

export default function App() {
  return (
   
    <div className= "landingPage">
    <div className = "carousel"> 
      <CarouselPhotos />
     
     </div>

     <div className = "LogoAndButton" >
    
     <button className="Button" >Get Started</button>
     
     <img className="Logo" src={logo} alt="logo" />

     </div>
     </div>
   
  );
}

