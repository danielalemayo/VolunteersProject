import React, { useState, useEffect } from 'react';
import './eventsContainer.css';
import styled from 'styled-components';

const Button = styled.button`
    display: inline;
    background: #36799e;
    color: white;
    height: 2rem;
    width: 5rem;
    margin-right: 0; 
`;

function EventsContainer() {
  const [volunteeringEvents, setEvents] = useState([]);

  const registerVolunteerToEvent = () => {
  };

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
        <span>name:</span>
        {' '}
        {event.name}
      </h5>
      <p>
        <span>city:</span>
        {' '}
        {event.city}
        <br />
        <span>description:</span>
        {' '}
        {event.description}
        <br />
        <span>eventDate:</span>
        {' '}
        {DateRender(event.eventDate)}
      </p>
      <Button type="submit" onClick={registerVolunteerToEvent}>השתתף</Button>
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
