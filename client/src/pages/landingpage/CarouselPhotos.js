import React from 'react'
import FirstImg from '../../img/volunteers.jpg';
import SecondImg from '../../img/brian-yurasits-PzQNdXw2a6g-unsplash.jpg';
import ThirdImg from '../../img/VulonteerPic.jpg';
import FourImg from '../../img/jsignup.jpg'
import Carousel from 'react-bootstrap/Carousel'
import './LandingPage.css'
export default function ControlledCarousel() {
  const Photos = [FirstImg, SecondImg, ThirdImg, FourImg];
  // const img = Photos.map((item, index) => {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={FirstImg}
              alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>אנו מזמינים אתכם להצטרף אלינו ולתת סיוע חירום.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SecondImg}
              alt="Third slide"
            />
            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ThirdImg}
              alt="Third slide"
            />
            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={FourImg}
              alt="Four slide"
            />
            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  // });
}


