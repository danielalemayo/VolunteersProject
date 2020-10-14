import React, { useState, useEffect } from 'react';
import './eventsContainer.css';

function EventsContainer() {
  const [volunteeringEvents, setEvents] = useState([]);

  const DateRender = (eventDate) => {
    const newDate = new Date(eventDate);

    const options = { month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric' };
    const time = newDate.toLocaleDateString('ISR', options);

    return time;
  };

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

  const renderEvents = volunteeringEvents.map((event) => (
    <li key={event.name} className="event">
      <h5>
        <h6>name:</h6>
        {' '}
        {event.name}
      </h5>
      <p>
        <h6>city:</h6>
        {' '}
        {event.city}
        <br />
        <h6>description:</h6>
        {' '}
        {event.description}
        <br />
        <h6>eventDate:</h6>
        {' '}
        {DateRender(event.eventDate)}
      </p>
      <button className="button" type="submit">השתתף</button>
    </li>
  ));

  return (
    <ul className="Container">
      <h3>All The Events</h3>
      {renderEvents}
    </ul>
  );
}

export default EventsContainer;
