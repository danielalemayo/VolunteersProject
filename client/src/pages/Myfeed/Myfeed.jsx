import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import EventsContainer from '../../components/EventsContainer/EventsContainer';
import EventsCalendar from '../../components/eventsCalender/EventsCalendar';
import './myFeed.css';

const Button = styled.a`
text-align: center;
/* text-size-adjust: auto; */
display: inline-block;
border-radius: 10rem;
height: 4rem;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 10rem;
background: transparent; 
color: white;
border: 2px solid white;
-webkit-text-decoration: none;
text-decoration: none;
  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) => props.primary && css`
    background: white;
    color: black;
  `}
`;

const ImgPic = styled.img`
margin-left: 10%;
margin-top: 5px;
border-radius: 50%;
border: 2px solid rgb(251,220,161);
width: 9rem;
height: 10rem;
`;

function MyFeed() {
  return (
    <div className="Page">
      <div className="section1">
        <ImgPic />
        <h2 className="MyFeedHeder">
          ברוך הבא
        </h2>
        <div className="Buttons">
          <Button className="Button" as={Link} to="/createVolunteer" href="http://localhost/3000/createvolunteer">בוא תן יד</Button>
          <Button className="Button" as={Link} to="/createEvent" href="http://localhost/3000/createevent">? צריך מתנדבים</Button>
        </div>
      </div>
      <div className="section2">
        <EventsCalendar />
        <EventsContainer />
      </div>
    </div>
  );
}

export default MyFeed;
