import React, { useState, useEffect } from 'react';
import urlBase from '../../utils/utils';


export default function EventsForLandingPage() {
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
        <li key={event.name} >
            <p>
                {event.description}
            </p>
        </li>
    ));

    return (
        <ul>
            {renderEvents}
        </ul>
    );
}



