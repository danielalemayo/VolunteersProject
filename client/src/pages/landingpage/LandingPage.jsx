import React from 'react';
import logo from '../../img/LightBackLogo.png';
import CarouselPhotos from './CarouselPhotos'
import ShowEvents from './ShowEvents'
// import ShowEvents from '../../components/ShowEvents/ShowEvents'
import './LandingPage.css'

export default function App() {
  return (
   
    <div className= "landingPage">
    <div className = "carousel"> 
      <CarouselPhotos />
     
     </div>
     <ShowEvents />

     <div className = "LogoAndButton" >
   
     <img className="Logo" src={logo} alt="logo" />

     <button className="getstarted" >Get Started</button>

     </div>
     </div>
   
  );
}

