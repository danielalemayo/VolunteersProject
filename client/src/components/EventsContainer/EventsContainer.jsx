import React, { useState, useEffect } from "react";
import '../EventsContainer/eventsContainer.css'
function EventsContainer() {
  const [events, setEvents] = useState([
    {
      name: "צביעה",
      city: "שדרות",
      description: "בואו לצבוע את הבית",
    },
    {
      name: "צביעה",
      city: "שדרות",
      description: "בואו לצבוע את הבית",
    },
  ]);

  useEffect(() => {
    function getEvents() {
      fetch("http://localhost:3001/api/myFeed")
        .then((response) => response.json())
        .then((events) => {
          setEvents(events);
        });
    }
    getEvents();
  }, []);

  const mapEvents = events.map((event, index) => (
    <li key={index}>
      <p className="Event">
        <h4 >{event.name}</h4>
        {event.city}<br></br>
        {event.description}
      </p>
    </li>
  ));

  return (
    <div className="Container">
      <ul>{mapEvents}</ul>
    </div>
  );
}

export default EventsContainer;
