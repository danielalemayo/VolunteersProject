import { useEffect, useState } from 'react';

function useUser() {
  const [user, setUser] = useState();
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
  return { user, login, logout };
}

export default useUser;
