export default function urlBase() {
  // domian is the localhost from the heroko
  const domain = process.env.REACT_APP_DOMAIN;
  // condition to invoke the https
  const http = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const url = `${http}://${domain}`;

  return url;
}
