import urlBase from '../utils/utils';

const APIURL = urlBase();

export const getUsers = async () => {
  const res = await fetch(`${APIURL}/api/users`);
  return res.json();
};

export const addUser = async data => {
  const response = await fetch(`${APIURL}/api/users`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const editUser = async data => {
  const response = await fetch(`${APIURL}/api/users/${data.id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const getUser = async data => {
  const response = await fetch(`${APIURL}/api/users/${data.id}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const deleteUser = async id => {
  const response = fetch(`${APIURL}/api/users/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache"
  });

  return response;
};

const apis = {
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser
};

export default apis;
