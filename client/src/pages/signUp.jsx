import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useUser } from '../providers/userContext';

import urlBase from '../utils/utils';
import './signupcs.css';

function SignUp() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const {user, login} = useUser();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${urlBase()}/api/users/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          password: data.password
        })
      });

      const responseData = await response.json();
      console.log(responseData.data);
      login(responseData.data.user)
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      history.push('/myFeed');
    } catch (err) {
      throw new Error(err.message);
    }
  };
  return (
    <div className="Page">
      <form className="bodyLog" action="api/page/signUp" onSubmit={handleSubmit(onSubmit)} method="POST">
        <div className="cont">
          <div className="form sign-up">
            <h2>SignUp</h2>
            <div>
              <div className="item">
                <span>Full Name</span>
                <input className="input" name="fullName" type="text" ref={register} />
              </div>
              <div className="item">
                <span>Email Address</span>
                <input className="input" type="email" name="email" ref={register} />
              </div>
              <div className="item">
                <span>Password</span>
                <input className="input" type="password" name="password" ref={register} />
              </div>
              <div className="item">
                <span>Confirm Password</span>
                <input className="input" type="password" name="password" />
              </div>
            </div>
            <button className="submit" type="submit">Add New</button>
            <a className="forgot-pass" href="login">Login</a>

          </div>

          <div className="sub-cont">
            <div className="img">
              {/* <div className="img-text m-in">
                <h2>sign up</h2>
                <p>text for sighup</p>
              </div> */}
              <div className="img-btn">
                <span className="m-up">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
