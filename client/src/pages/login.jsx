import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import urlBase from '../utils/utils';

import './signupcs.css';

function Login() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [isLogin, setIsLogin] = useState(true);
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${urlBase()}/api/users/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      });
      const newData = await response.json();
      if (!newData) {
        return (<Redirect to={{ pathname: '/login' }} />
        );
      }
      if (newData) {
        const user = newData.existingUser;
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/myFeed');
      }
    } catch (error) {
      console.error(error);
    }
    setIsLogin(false);
  };
  return (
    <div className="Page">
      <form className="bodyLog" onSubmit={handleSubmit(onSubmit)} method="POST">
        <div className="cont">
          <div className="form sign-up">
            <h2>Login</h2>
            <div>
              <div className="item">
                <span>Email Address</span>
                <input className="input" type="email" name="email" ref={register} />
              </div>
              <div className="item">
                <span>Password</span>
                <input className="input" type="password" name="password" ref={register} />
              </div>
            </div>

            {isLogin ? null : <div className="loginError">Your email or password is not correct</div>}

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
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
