import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const loacalUser = localStorage.getItem('user');
    const jUser = JSON.parse(loacalUser);
    setUser(jUser);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          console.log(user);
          return (<Component {...props} />);
        }
        return (
          <Redirect
            to={
              {
                pathname: '/login'
                // state: { props.location }
              }
            }
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
