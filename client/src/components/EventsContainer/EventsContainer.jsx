import React, { useState, useEffect } from 'react';
import './eventsContainer.css';
import styled from 'styled-components';
import urlBase from '../../utils/utils';

const Button = styled.button`
    display: inline;
    background: #36799e;
    color: white;
    height: 2rem;
    width: 5rem;
    margin-right: 0; 
`;

function EventsContainer(props) {
  const [volunteeringEvents, setEvents] = useState([]);
  const [regVolToEvent, setVolListToEvent] = useState([]);

  const registerVolunteerToEvent = async ({ event }) => {
    setVolListToEvent(event.registerVolunters);
    console.log(regVolToEvent);

    // event.registerVolunters.push({ name: 'david', email: 'cdsdcd' });
    // const response = await fetch(`${urlBase()}/myFeed/:${chosenEvent._id}`, {
    //   method: 'patch',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: props.user.name,
    //     email: props.user.email
    //   })
    // });
    // console.log('This is response', response);
    // const dataRes = await response.json();
  };

  const DateRender = (eventDate) => {
    const newDate = new Date(eventDate);

    const options = {
      month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric'
    };
    const time = newDate.toLocaleDateString('ISR', options);

    return time;
  };

  useEffect(() => {
    function getAllEvents() {
      fetch(`${urlBase()}/api/myFeed`)
        .then((response) => response.json())
        .then((volunteerEvents) => {
          setEvents(volunteerEvents.data);
        });
    }
    getAllEvents();
  }, []);

  const renderEvents = volunteeringEvents.map((event) => (
    <li key={event.name} className="event">
      <h5>
        <span className="eventSpan">Name: </span>
        {' '}
        {event.name}
      </h5>
      <p>
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
      <Button myEvent={event} type="submit" onSubmit={registerVolunteerToEvent}>השתתף</Button>
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
