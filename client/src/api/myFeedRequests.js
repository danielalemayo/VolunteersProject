import urlBase from '../utils/utils';

const APIURL = urlBase();

const registerVolunteerToEvent = async (eventId, userId) => {
  const res = await fetch(`${urlBase()}/api/myFeed/${eventId}`, {
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

const getEventsByRegisterVolunteer = async (userId) => {
  const res = await fetch(`${APIURL}/api/myFeed/registerEvent/${userId}`);
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
  registerVolunteerToEvent
};

export default apis;
