import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'

import './LandingPage.css'
export default function AutomaticallyViewEvents() {


    return (
        <div>
            <div className="ticker" >
            <div className="title"><h1>OUR EVENTS</h1></div>
            <div className="news">
            <marquee>
             <p> Nulla vitae elit libero, a pharetra augue mollis interdum<span>||</span>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit<span>||</span>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
           </marquee> 
           </div>           
            </div>
        </div>
    );
}
