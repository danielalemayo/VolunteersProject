import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './eventForm.css';
import urlBase from '../../utils/utils';
import 'react-datepicker/dist/react-datepicker.css';

function EventForm(props) {
  const history = useHistory();
  const user = props.user;
  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit } = useForm();

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
                <span htmlFor="name"> General name</span>
                <input type="text" placeholder="Name what you offer volunteer for" name="name" ref={register} />
              </div>
              <div>
                <div className="item">
                  <span>City</span>
                  <input type="text" placeholder="Where you can Volunteer" name="city" ref={register} />
                </div>
                <div className="item">
                  <span>Category</span>
                  <select className="item" name="category" ref={register}>
                    <option value="teaching">teaching</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <div className="item">
                <span htmlFor="name"> Date</span>
                {/* <input type="text" name="dateTime" ref={register}> */}
                <DatePicker
                  ref={register}
                  innerRef={register}
                  name="dateTime"
                  className="my-form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MM-dd-yyyy h:mm"
                />
                {/* </input> */}
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

export default EventForm;
