import React, { useState, useEffect } from 'react';
import urlBase from '../../utils/utils';


function EventsContainer() {
    const [volunteeringEvents, setEvents] = useState([]);
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


        <li key={event.name} className="list-group-item" >
            <p>
                <span className="eventSpan"></span>
                {' '}
                {event.description}
            </p>
        </li>
    ));

    return (
        <ul className="list-group" >
            {renderEvents}
        </ul>
    );
}


export default EventsContainer;
