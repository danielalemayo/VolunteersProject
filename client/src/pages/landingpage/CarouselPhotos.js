import React from 'react'
import FirstImg from '../../img/volunteers.jpg';
import SecondImg from '../../img/brian-yurasits-PzQNdXw2a6g-unsplash.jpg';
import ThirdImg from '../../img/VulonteerPic.jpg';
import FourImg from '../../img/jsignup.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './LandingPage.css'
export default function ControlledCarousel() {
  const photos = [FirstImg, SecondImg, ThirdImg, FourImg];
  const renderImages = photos.map((item, index) => (
    <Carousel.Item key={item}>
      <img
        className="d-block w-100"
        src={item}
        alt={`${index+1} slide`}
      />
    </Carousel.Item>
  ));
    return (
      <div>
        <Carousel>
          {renderImages}
        </Carousel>
      </div>
    );
 
}


