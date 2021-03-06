/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import apis from '../../api/myFeedRequests';
import styled from 'styled-components';

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

const RegisterVolTOEventsList = (props) => {
  const [volunteerRegisterList, setVolunteerRegisterList] = useState([]);

  const getEventsByRegisterVolunteer = async () => {
    const res = await apis.getEventsByRegisterVolunteer(props.user._id);
    setVolunteerRegisterList(res.data);
  };

  const removeVolFromEvent = async (eventId) => {
    const res = await apis.unRegisterVolunteerToEvent(eventId, props.user._id);
    console.log(res.data);
    setVolunteerRegisterList(res.data);
  };

  useEffect(() => {
    getEventsByRegisterVolunteer();
  }, []);

  const DateRender = (eventDate) => {
    const newDate = new Date(eventDate);

    const options = {
      month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric'
    };
    const dateTime = newDate.toLocaleDateString('ISR', options);

    return dateTime;
  };

  const renderEvents = volunteerRegisterList.map((event) => (
    <li key={event._id} className="event">

      <p>
        <span className="eventSpan">Category: </span>
        {' '}
        {event.category}
        <br />
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
      <Button type="button" onClick={() => removeVolFromEvent(event._id)}>Cancel {':('}</Button>
    </li>
  ));

  return (
    <ul className="Container">
      {volunteerRegisterList.length > 0 ? renderEvents : <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '40px' }}>None registered events.. <span style={{ color: '#41aea9' }}>Start Halping Now</span> and <span style={{ color: '#41aea9' }}>Register to events</span> </div>}
    </ul >
  );
};

export default RegisterVolTOEventsList;
