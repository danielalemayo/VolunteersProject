import React from 'react';
import './signupcs.css';

function Login() {
  const onSubmit = async (data) => {

    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      });

      const responseData = response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      console.log(responseData);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <div className="Page">
      <form className="bodyLog" action="api/page/signUp" onSubmit={onSubmit}>
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
