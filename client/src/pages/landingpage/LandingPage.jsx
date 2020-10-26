import React from 'react';
import logo from '../../img/LightBackLogo.png';
import CarouselPhotos from './CarouselPhotos'
import ShowEvents from './ShowEvents'
import './LandingPage.css'

export default function App() {
  return (
   
    <div className= "landingPage">
      <div className="aboutus">  <h1 className="title"> LightBack</h1>
      <h2>Welcome to  LightBack </h2>
      <p>We are an independent membership body that supports, represents and champions people in volunteer management in the Israel regardless of field, discipline or sector. </p>
      </div>
     
    <div ref="" className = "carousel"> 
      <CarouselPhotos />
     </div>
     <div className= "allevents">
     <ShowEvents />
     </div>

     <div className = "LogoAndButton" >
   
     <img className="Logo" src={logo} alt="logo" />

     <button className="getstarted" >Get Started</button>

     </div>
     </div>
   
  );
}

