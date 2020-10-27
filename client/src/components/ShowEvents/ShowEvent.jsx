import React, { useState, useEffect } from 'react';
import apis from '../../api/myFeedRequests';

export default function EventsForLandingPage() {

  const [volunteeringEvents, setEvents] = useState([]);

  const getAllEvents = async () => {
    const volunteerEvents = await apis.getAllEvents();
    setEvents(volunteerEvents.data);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const renderEvents = volunteeringEvents.map((event) => (

    <li key={event.name} className="list-group-item" >
      <p>
        <span className="eventSpan"></span>
        {' '}
        {event.description}
      </p>
    </li>
  ));

  return (
    <ul className="list-group">
      {renderEvents}
    </ul>
  );
};


