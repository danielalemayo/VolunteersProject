/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import apis from '../../api/myFeedRequests';

const RegisterVolTOEventsList = (props) => {
  const [volunteerRegisterList, setVolunteerRegisterList] = useState([]);

  const getEventsByRegisterVolunteer = async () => {
    const res = await apis.getEventsByRegisterVolunteer(props.user._id);
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
    <li key={event.name} className="event">
      <h5>
        <span className="eventSpan">Category: </span>
        {' '}
        {event.category}
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
      {/* <Button type="button" onClick={() => setVolunteerToEvent(event._id, user.id)}>participate</Button> */}
    </li>
  ));

  return (
    <ul className="Container">
      {renderEvents}
    </ul>
  );
};

export default RegisterVolTOEventsList;
