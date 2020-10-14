import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './eventForm.css';
import urlBase from '../../utils/utils';
import 'react-datepicker/dist/react-datepicker.css';

function EventForm() {
  // const history = useHistory();
  // const user = props.user;
  const categories = ['Teaching', 'Help Homles', 'Driving lesons'];
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
          eventDate: startDate.getHours(),
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
            <h2>Take a Hand</h2>
            <div>
              <div className="item">
                <h6 htmlFor="name"> General name</h6>
                <input type="text" placeholder="Name What you Need in generaly" name="name" ref={register} />
              </div>
              <div>
                <div className="item">
                  <h6>City</h6>
                  <input type="text" placeholder="Witch city you need" name="city" ref={register} />
                </div>
                <div className="item">

                  <h6>Category</h6>
                  <select className="item" name="category" ref={register}>
                    {categories.map((item) => {
                      return (<option ref={register} value={item}>{item}</option>);
                    })}
                  </select>
                </div>
              </div>
              <div className="item">
                <h6 htmlFor="name"> Date</h6>
                {/* <input type="text" name="dateTime" ref={register}> */}
                <DatePicker
                  // ref={register}
                  // innerRef={register}
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
                <h6>Description</h6>
                <textarea className="descrition-input" type="text" placeholder="Total volunteer description/ nots " name="description" ref={register} />
                {/* <input className="descrition-input" type="text" placeholder="Total volunteer description/ nots " name="description" ref={register} /> */}
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
