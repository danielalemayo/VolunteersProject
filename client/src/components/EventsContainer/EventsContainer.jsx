/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './eventsContainer.css';
import styled from 'styled-components';
import apis from '../../api/myFeedRequests';

const Button = styled.button`
  margin-bottom: 7px;
  display: inline;
  background: #41aea9;
  color: white;
  height: 2rem;
  width: 5.5rem;
  margin-right: 0;
  border-radius: 8%;
  border-color: #41aea9;
  
`;

function EventsContainer(props) {
  const [volunteeringEvents, setEvents] = useState([]);

  const setVolunteerToEvent = async (eventId, userId) => {
    apis.registerVolunteerToEvent(eventId, userId);
  };

  const DateRender = (eventDate) => {
    const newDate = new Date(eventDate);

    const options = {
      month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric'
    };
    const time = newDate.toLocaleDateString('ISR', options);

    return time;
  };

  const getAllEvents = async () => {
    const volunteerEvents = await apis.getAllEvents();
    setEvents(volunteerEvents.data);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const renderEvents = volunteeringEvents.map((event) => (
    <li key={event.name} className="event">
      <p>
      <span className="eventSpan">Category: </span>
        {' '}
        {event.category}
        <br/>
        <span className="eventSpan">City:</span>
        {' '}
        {event.city}
        <br />
        <span className="eventSpan">Description:</span>
        {' '}
        {event.description}
        <br />
        <span className="eventSpan">Event Date:</span>
        {' '}
        {DateRender(event.eventDate)}
      </p>
      <Button
        type="button"
        onClick={() => {
          setVolunteerToEvent(event._id, props.user._id);
        }}
      >
        Join
      </Button>
    </li>
  ));

  return (
    <ul className="Container">
      {renderEvents}
    </ul>
  );
}

export default EventsContainer;
