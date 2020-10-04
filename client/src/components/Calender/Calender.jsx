import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  const [date, setDate] = useState(new Date());

  const onChange = () => {
    setDate(date);
    console.log(date);
  };

  return (
    <div>
      <Calendar
        calendarType="Hebrew"
        onChange={onChange}
        value={date}
      />
    </div>
  );
}
export default Calender;
