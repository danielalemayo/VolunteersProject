import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import routUser from './../../routes/api/users'
const routUser = require('./../../routes/api/users')

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Address should be replaced with FQDN of application and taken from ENV
    const domain = process.env.REACT_APP_DOMAIN;
    const http = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    fetch(`${http}://${domain}/users`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      }).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <form action={routUser} method="post">
        <input type="text" name="name" placeholder="name"></input>
        <input type="text" name="email" placeholder="email"></input>
        <input type="text" name="password" placeholder="password"></input>
        <button type="submit">Submit</button>
      </form>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit&nbsp;
           <code>src/App.jsx</code>
          &nbsp;and save to reload me!
           <br />
           Running in
           &nbsp;
           {process.env.NODE_ENV}
          &nbsp;
           mode
         </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Users List from Server:
           {
              users.map((user) => (<div key={user.id}>{user.name}</div>))
            }
          </a>
        </header>
      </div>
    </div>
  );
}
export default App;
