import React from 'react';
import useForm from 'react-form-data';

export default function Crete() {
  const { register, handleSubmit } = useForm('');

  const onSubmit = (data) => {
    const url = 'http://localhost:3001/api/users/';

    fetch(url, {
      method: 'POST',
      body: data,
      contentType: 'multipart/form-data'
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" name="email" ref={register} />
      <input type="password" placeholder="Password" name="password" ref={register} />
      <input type="submit" />
    </form>
  );
};
