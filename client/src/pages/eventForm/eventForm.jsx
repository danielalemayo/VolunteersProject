import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './eventForm.css';
import urlBase from '../../utils/utils';
import 'react-datepicker/dist/react-datepicker.css';

function EventForm() {
  const history = useHistory();
  const categories = ['Select', 'Teaching', 'Help Homles', 'Driving lessons', 'Spacial needs', 'First aid', 'Other'];
  const [startDate, setStartDate] = useState(new Date());
  const formDate = new Date();
  const storageUser = localStorage.getItem('user');
  const user = JSON.parse(storageUser);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const respond = await fetch(`${urlBase()}/api/myFeed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user.id,
          city: data.city,
          category: data.category,
          eventDate: startDate,
          description: data.description
        })
      });
      const resData = respond.json();
      console.log(resData);
      history.push('/myFeed');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="bodyForm">
        <div className="formCont">
          <div className="form">
            <h2 className="formHeader">Get Assistance</h2>
            <div className="item">
              <h6 className="sTitle">Category</h6>
              <select className="textArea" name="category" ref={register({ required: true })}>
                {categories.map((item) => (
                  <option
                    name={item}
                    key={item}
                    value={item}
                  // ref={register({ required: true })}
                  >
                    {item}
                  </option>
                ))}
              </select>
              {errors.category && errors.category.type === 'required' && (<span className="error" style={{ color: 'red' }}> Fill the Category ! </span>)}
            </div>
            <div className="item">
              <h6 className="sTitle">Requested in City</h6>
              <input className="textArea" type="text" name="city" ref={register({ required: true })} />
              {errors.city && errors.city.type === 'required' && (<span className="error"> Fill the city ! </span>)}
            </div>

            <div className="item">
              <h6 className="sTitle"> Requested Date</h6>
              <DatePicker
                // ref={register({ required: true })}
                name="dateTime"
                className="my-form-control textArea"
                selected={startDate}
                onChange={(date) => (setStartDate(date))}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MM-dd-yyyy h:mm"
              />
              {new Date(formDate) > new Date(startDate) && (
                <span
                  className="error"
                >
                  Fill the Requested Date !
                </span>
              )}
            </div>
            <div className="item">
              <h6 className="sTitle">Description</h6>
              <textarea type="text" placeholder="Total volunteer description/ nots " name="description" ref={register} />
              {/* {errors.description && errors.description.type === 'required' && (
                <span className="error"> more description needed </span>
              )} */}
            </div>
            <button className="bSubmit" type="submit" value="Submit">Go</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EventForm;
