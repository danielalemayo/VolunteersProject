import React, { createContext, useEffect, useState, useContext } from 'react';
const userContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  function login(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem('user');
    setUser(null);
  }

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  return (
    <userContext.Provider value={{user, login, logout}} >
      {props.children}
    </ userContext.Provider>
  );
} 
export const useUser = () => useContext(userContext)
