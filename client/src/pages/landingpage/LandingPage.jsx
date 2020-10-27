import React from 'react';
import logo from '../../img/LightBackLogo.png';
import CarouselPhotos from './CarouselPhotos';
import ShowEvents from '../../components/ShowEvents/ShowEvent';
import { useHistory } from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage() {
  const history = useHistory();
  function HistoryPush() {
    history.push('/myFeed');
  }

  return (

    <div className="landingPage">
      <div className="aboutus">  <h1 className="title"> LightBack</h1>
        <h2>Welcome to  LightBack </h2>
        <p>We are an independent membership body that supports, represents and champions people in volunteer management in the Israel regardless of field, discipline or sector. </p>
      </div>

      <div className="carouselandallevents">
        <div className="carousel">
          <CarouselPhotos />
        </div>
        <div className="allevents">
          <h1>OUR EVENTS</h1>
          <ShowEvents />
        </div>
      </div>

      <div className="LogoAndButton" >

        <img className="Logo" src={logo} alt="logo" />

        <button className="getstarted" onClick={() => HistoryPush()}>Get Started</button>

      </div>
    </div>

  );
}
