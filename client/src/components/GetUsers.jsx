import React, { useState, useEffect } from 'react';
import urlBase from '../utils/utils';

export default function GetUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    function getUsers() {
      fetch(`${urlBase()}/api/users/`)
        .then((response) => response.json())
        .then((usersData) => {
          setUsers(usersData.data);
        });
    }
    getUsers();
  }, []);

  const renderUsers = users.map((user) => (
    <li key={user._id}>
      <div>
        Username:
        {user.name}
      </div>
      <div>
        ID:
         {user._id}
      </div>
      <div>
        email:
        {user.email}
      </div>
      <div>
        password:
        {user.password}
      </div>
    </li>
  ));

  return (
    <ul>
      {renderUsers}
    </ul>
  );
}
