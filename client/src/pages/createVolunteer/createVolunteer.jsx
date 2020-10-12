import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateVolunteer.css';
import urlBase from '../../utils/utils';

function CreateVolunteer(props) {
  const history = useHistory();
  const user = props.user;

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const respond = await fetch(`${urlBase()}/api/myfeed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          city: data.city,
          category: data.category,
          description: data.description
        })
      });

      console.log(respond.json());
      // history.push('/myFeed');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="bodyForm">
        <div className="formCont">
          <div className="form">
            <h2>Give a Hand</h2>
            <div>
              <div className="item">
                <span htmlFor="name"> What are you usfall </span>
                <input type="text" placeholder="Name what you offer volunteer for" name="name" ref={register} />
              </div>
              <div>
                <div className="item">
                  <span>City</span>
                  <input type="text" placeholder="Where you can Volunteer" name="city" ref={register} />
                </div>
                <div className="item">
                  <span>Category</span>
                  <select className="item" name="Category" ref={register}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <div className="item">
                <span>Description</span>
                <input type="text" placeholder="Total volunteer description/ nots " name="description" ref={register} />
              </div>

              <button className="submit" type="submit" value="Submit">Go</button>

            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateVolunteer;
