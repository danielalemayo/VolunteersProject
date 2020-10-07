import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import './signupcs.css';

function SignUp() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch('http://localhost:3001/api/users/signUp', {
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

      const responseData = response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      history.push('/profile');
    } catch (err) {
      throw new Error(err.message);
    }
  };
  return (
    <div className="Page">
      <form className="bodyLog" action="api/page/signUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="cont">
          <div className="form sign-up">
            <h2>SignUp</h2>
            <div>
              <div className="item">
                <span>Full Name</span>
                <input name="fullName" type="text" ref={register} />
              </div>
              <div className="item">
                <span>Email Address</span>
                <input type="email" name="email" ref={register} />
              </div>
              <div className="item">
                <span>Password</span>
                <input type="password" name="password" ref={register} />
              </div>
              <div className="item">
                <span>Confirm Password</span>
                <input type="password" name="password" />
              </div>
            </div>
            <button className="submit" type="submit">Add New</button>
            <a className="forgot-pass" href="login">Login</a>

          </div>

          <div className="sub-cont">
            <div className="img">
              <div className="img-text m-in">
                <h2>sign up</h2>
                <p>text for sighup</p>
              </div>
              <div className="img-btn">
                <span className="m-up">Sign Up</span>
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

export default SignUp;

// return (
//   <div className="Page">
//     <form action="api/page/signUp" onSubmit={handleSubmit(onSubmit)}>
//       <h1>SignUp</h1>
//       <div>

//         <div className="item">
//           <input name="fullName" type="text" placeholder="Name" ref={register} />
//         </div>

//         <div className="item">
//           <input type="email" name="email" placeholder="Email" ref={register} />
//         </div>

//         <div className="item">
//           <input type="password" name="password" placeholder="Password" ref={register} />
//         </div>

//         <div className="item">
//           <input type="password" name="password" placeholder="Confirm Password" />
//         </div>

//       </div>

//       <button className="item" type="submit">Add New</button>

//     </form>
//   </div>
//);