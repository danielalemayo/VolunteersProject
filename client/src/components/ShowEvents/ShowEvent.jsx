import React, { useState, useEffect } from 'react';
import ShowEvents from '../../pages/landingpage/ShowEvents'
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
        <li key={event.name} className="list-group-item">
            <p>
                <span className="eventSpan"></span>
                {' '}
                {event.description}
            </p>
        </li>
    ));

    return (
        <ul className="list-group">
            {/* <ShowEvents /> */}
            {renderEvents}
        </ul>
    );
}


export default EventsContainer;
