import React from 'react'
import FirstSlide from '../../img/volunteers.jpg';
import SecondSlide from '../../img/brian-yurasits-PzQNdXw2a6g-unsplash.jpg';
import ThirdSlide from '../../img/VulonteerPic.jpg';
import Carousel from 'react-bootstrap/Carousel'
import './LandingPage.css'
export default function ControlledCarousel() {


  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondSlide}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img

            className="d-block w-100"
            src={ThirdSlide}
            alt="Third slide"
            width='100px'



          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


