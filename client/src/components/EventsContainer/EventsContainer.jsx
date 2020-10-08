import React, { useState, useEffect } from 'react';
import './eventsContainer.css';

function EventsContainer() {
  const [volunteeringEvents, setEvents] = useState([]);

  useEffect(() => {
    function getAllEvents() {
      fetch('http://localhost:3001/api/myFeed')
        .then((response) => response.json())
        .then((volunteeringEvents) => {
          setEvents(volunteeringEvents.data);
        });
    }
    getAllEvents();
  }, []);
  const handleClick = () => {
    
  };

  const renderEvents = volunteeringEvents.map((event) => (
    <li key={event.name} className="event">
      <h5>
        שם:
        {' '}
        {event.name}
      </h5>
      <p>
        עיר:
        {event.city}
        <br />
        תיאור:
        {event.description}
      </p>
      <button className="button" type="submit" onClick={handleClick}>השתתף</button>
    </li>
  ));

  return (
    <ul className="Container">
      {renderEvents}
    </ul>
  );
}

export default EventsContainer;
