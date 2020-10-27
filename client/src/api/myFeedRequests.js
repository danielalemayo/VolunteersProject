import urlBase from '../utils/utils';

const APIURL = urlBase();

// Register Volunteer TO event
const registerVolunteerToEvent = async (eventId, userId) => {
  const res = await fetch(`${urlBase()}/api/myFeed/registerVolToEvent/${eventId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      volunteerId: userId
    })
  });
  const json = await res.json();
  return json;
};

// Unregister Volunteer from event
const unRegisterVolunteerToEvent = async (eventId, userId) => {
  const res = await fetch(`${urlBase()}/api/myFeed/registerVolToEvent/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      volunteerId: userId
    })
  });
  const json = await res.json();
  return json;
};

// Get the Events that the volunteer register for
const getEventsByRegisterVolunteer = async (userId) => {
  const res = await fetch(`${APIURL}/api/myFeed/registerVolToEvent/${userId}`);
  const json = await res.json();
  return json;
};

const getAllEvents = async () => {
  const res = await fetch(`${urlBase()}/api/myFeed`);
  const json = await res.json();
  return json;
};

const apis = {
  getEventsByRegisterVolunteer,
  getAllEvents,
  registerVolunteerToEvent,
  unRegisterVolunteerToEvent
};

export default apis;
