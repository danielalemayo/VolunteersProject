import { Error } from 'mongoose';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './signupcs.css';

function Login() {
  const history = useHistory();

  const onSubmit = async (data) => {
    const { email, password } = data;

    console.log(' Enter to function (1)');
    // console.log(password);

    try {
      const respond = await fetch('localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      console.log(' after try (2)');
      const respondData = respond.json();
      if (respondData === null) {
        return <h1>No User Fund</h1>;
      }
      history.push('/profile');
    } catch (error) {
      throw new Error(error.message);
    }
    console.log(' after catch (2)');
  };

  return (
    <div className="Page">
      <form className="bodyLog" action="api/users/login" onSubmit={onSubmit}>
        <div className="cont">
          <div className="form sign-up">
            <h2>Login</h2>
            <div>
              <div className="item">
                <span>Email Address</span>
                <input type="email" name="email" />
              </div>
              <div className="item">
                <span>Password</span>
                <input type="password" name="password" />
              </div>
            </div>
            <button className="submit" type="submit">submit</button>
            <a href="signup" className="forgot-pass">SignUp</a>
          </div>
          <div className="sub-cont">
            <div className="img-l">
              <div className="img-l-text m-in">
                <h2>login</h2>
                <p>text for login</p>
              </div>
              <div className="img-btn">
                <span className="m-in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
