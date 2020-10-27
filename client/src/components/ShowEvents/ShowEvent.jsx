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

    <li key={event.name}>
      <p>
        {event.description}
      </p>
    </li>
  ));

  return (
    <ul className="eventslist">
      {renderEvents}
    </ul>
  );
};


