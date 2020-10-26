import React from 'react'
import ShowEvent from '../../components/ShowEvents/ShowEvent'

import './LandingPage.css'
export default function AutomaticallyViewEvents() {


    return (
        <div>
            <div className="events">
                <h1>OUR EVENTS</h1>
            </div>
            <ShowEvent />

            {/* <div>
            <ShowEvent />
            </div> */}
            {/* <marquee>
            
            </marquee> */}

            {/* <marquee>
             <p> Nulla vitae elit libero, a pharetra augue mollis interdum<span>||</span>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit<span>||</span>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur</p> */}
            {/* </marquee>  */} 


        </div>
    );
}
