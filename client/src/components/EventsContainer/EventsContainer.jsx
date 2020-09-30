/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import './eventsContainer.css';

function EventsContainer() {
  const [volunteeringEvents, setEvents] = useState([]);

  useEffect(() => {
    function getAllEvents() {
      fetch('http://localhost:3001/api/myFeed')
        .then((response) => response.json())
        .then((volunteeringEvents) => {
          console.log(volunteeringEvents);
          setEvents(volunteeringEvents.data);
        });
    }
    getAllEvents();
  }, []);

  const renderEvents = volunteeringEvents.map((event) => (
    <li key={event._id}>
      <div>
        שם: {event.name}
      </div>
      <div>עיר: {event.city}</div>
      <div>תיאור: {event.description}</div>
    </li>
  ));

  return (
    <ul className="Container">
      {renderEvents}
    </ul>
  );
}

export default EventsContainer;
