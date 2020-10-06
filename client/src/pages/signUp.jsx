import React from 'react';
import { useForm } from 'react-hook-form';

import './SingCss.css';

function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch('http://localhost:3001/api/users', {
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

      console.log(responseData);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <div className="Page">
      <form action="api/page/signUp" onSubmit={handleSubmit(onSubmit)}>
        <h1>SignUp</h1>
        <div>

          <div className="item">
            <input name="fullName" type="text" placeholder="Name" ref={register} />
          </div>

          <div className="item">
            <input type="email" name="email" placeholder="Email" ref={register} />
          </div>

          <div className="item">
            <input type="password" name="password" placeholder="Password" ref={register} />
          </div>

          <div className="item">
            <input type="password" name="password" placeholder="Confirm Password" />
          </div>

        </div>

        <button className="item" type="submit">Add New</button>

      </form>
    </div>
  );
}

export default SignUp;
