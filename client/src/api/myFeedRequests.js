import urlBase from '../utils/utils';

const APIURL = urlBase();

const getEventsByRegisterVolunteer = async () => {
  const res = await fetch(`${APIURL}/api/myFeed//registerEvent/5f6b14fd1d910a5af4b2f3ef`);
  const body = await res.json();
  return body;
};

const apis = {
  getEventsByRegisterVolunteer
};

export default apis;
