const URL = 'localhost:3001/api/users';

export default function getUser() {
  return fetch(`${URL}`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((resObj) => {
      console.log(resObj);
      return resObj.user;
    });
}
