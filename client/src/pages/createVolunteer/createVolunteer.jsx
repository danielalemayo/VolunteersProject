import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateVolunteer.css';

function CreateVolunteer(props) {
  const history = useHistory();
  const user = props.user;

  const {
    register, handleSubmit, watch, errors
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.name);
    try {
      const respond = await fetch('http://localhost:3001/api/myFeed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          category: data.category,
          area: data.area,
          description: data.description
        })
      });

      console.log(respond.json());
      history.push('/myFeed');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form method="Post" onSubmit={handleSubmit(onSubmit)}>
      <form className="bodyLog">
        <div className="cont">
          <div className="form sign-up">
            <h2>Give a Hand</h2>
            <div>
              <div className="item">
                <span htmlFor="name"> Name </span>
                <input type="text" placeholder="Name what you offer volunteer for" name="name" ref={register} />
              </div>
              <div>
                <span>Category</span>
                <select className="item" name="Category" ref={register}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="item">
                <span>Area</span>
                <input type="text" placeholder="Where you can Volunteer" name="area" ref={register} />
              </div>
              <div className="item">
                <span>Description</span>
                <input type="text" placeholder="Total volunteer description/ nots " name="description" ref={register} />
              </div>

              <input type="submit" value="Submit" />

            </div>
          </div>
        </div>
      </form>
    </form>
  );
}

export default CreateVolunteer;
