import React, { useState } from 'react';
import './eventsCalander.css';

function EventsCalendar(props) {
  const [date, setDate] = useState(new Date());
  // ToDO Register Events list in user schema;
  // const [registerEvents, setRegisterEvents] = useState([]);

  const onChange = (newDate) => { setDate({ newDate }); };

  return (
    <div>

    </div>
  );
}

export default EventsCalendar;
