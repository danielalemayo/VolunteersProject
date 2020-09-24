import React, { useState, useEffect } from "react";

export default function GetUsers() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        function getUsers() {
            fetch('http://localhost:3000/')
                .then(response => response.json())
                .then(users => {
                    setUsers(users);
                })
        }
        getUsers()
    }, []);

    const renderUsers = users.map(user => (
        <li key={user.id}>
            <div>Username: {user.name}</div>
            <div>ID: {user.id}</div>
        </li>)
    );

    return (
        <ul>
            {renderUsers}
        </ul>
        
    )


}
