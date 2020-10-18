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
  // const user = props.user;
  const categories = ['Teaching', 'Help Homles', 'Driving lesons', 'Autistics kids', 'Mada', 'other'];
  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const respond = await fetch(`${urlBase()}/api/myFeed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          city: data.city,
          category: data.category,
          eventDate: startDate,
          description: data.description
        })
      });
      const resData = respond.json();
      // console.log(resData);
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
            <h2>Take a Hand</h2>
            <div>
              <div className="item">
                <h6 htmlFor="name"> General name</h6>
                <input className="textArea" type="text" placeholder="Name What you Need in generaly" name="name" ref={register({ required: true })} />
                {/* {!errors.name && (<span className="error"> Fill the Name ! </span>)} */}
              </div>
              <div>
                <div className="item">
                  <h6>City</h6>
                  <input className="textArea" type="text" placeholder="Witch city you need" name="city" ref={register({ required: true })} />
                  {/* {!errors.city && (<span className="error" style={{ color: 'red' }}> Fill the city ! </span>)} */}
                </div>
                <div className="item">
                  <h6>Category</h6>
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
                  {/* {!errors.category && (<span className="error" style={{ color: 'red' }}> Fill the Category ! </span>)} */}
                </div>
              </div>
              <div className="item">
                <h6 htmlFor="name"> Date</h6>
                <DatePicker
                  ref={register({ required: true })}
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
                {/* {!errors.category && (<span className="error"
                 style={{ color: 'red' }}> Fill the Date ! </span>)} */}
              </div>
              <div className="item">
                <h6>Description</h6>
                <textarea type="text" placeholder="Total volunteer description/ nots " name="description" ref={register} />
                {/* {errors.description.length() < 20 && (
                  <div className="error" > more description needed </div>
                )} */}
              </div>
              <button className="submit" type="submit" value="Submit">Go</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EventForm;
