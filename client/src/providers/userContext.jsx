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
  function tryParseJson(str) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return null;
    }
  }
  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      const jSonUser = tryParseJson(userFromStorage);
      setUser(jSonUser);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, login, logout }} >
      {props.children}
    </ userContext.Provider>
  );
}
export const useUser = () => useContext(userContext)
