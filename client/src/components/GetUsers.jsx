import React, { useState, useEffect } from 'react';

export default function GetUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        function getUsers() {
            fetch('http://localhost:3001/api/users/')
                .then(response => response.json())
                .then(users => {
                    console.log(users);
                    setUsers(users.data);
                })
        }
        getUsers()

    }, []);

    const renderUsers = users.map((user) => (
        <li key={user._id}>
            <div>Username: {user.name}</div>
            <div>ID: {user._id}</div>
            <div>email: {user.email}</div>
            <div>password: {user.password}</div>
        </li>)
    );

    return (
        <ul>
            {renderUsers}
        </ul>
    );
}
