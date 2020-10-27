import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../providers/userContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useUser();
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
