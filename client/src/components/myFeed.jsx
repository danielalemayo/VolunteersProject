// import { response } from "express";
import React, { useState, useEffect } from "react";

export default function GetAllEvents() { 
  const [volunteeringEvents, setEvents] = useState([]); useEffect(() => {
    function getAllEvents (){
          fetch('http://localhost:3001/api/myFeed')
            .then(response => response.json())
            .then (volunteeringEvents =>{
                console.log(volunteeringEvents);
                setEvents(volunteeringEvents.data);
            })
          
        }
        
    
    getAllEvents()

}, []);

  const renderEvents = volunteeringEvents.map(event =>(
      <li key={event._id}>
          <div>שם: {event.name}</div>
          <div>עיר: {event.city}</div>
          <div>תיאור: {event.description}</div>
      </li>)
    );

    return(
        <ul>
            {renderEvents}
        </ul>

    )
}