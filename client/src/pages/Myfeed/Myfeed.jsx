import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import EventsContainer from '../../components/EventsContainer/EventsContainer';
import EventsCalendar from '../../components/eventsCalender/EventsCalendar';
import ProfilePic from '../../img/sabine-ojeil-8KM_DyWGemw-unsplash.jpg';
import RegisterList from '../../components/registerVol-EventList/registerList';
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
background-image: url(${(props) => props.src});
// user: the user that conected
flex-shrink: 0;
margin-left: 10%;
margin-top: 5px;
border-radius: 50%;
border: 2px solid rgb(251,220,161);
width: 9rem;
height: 10rem;
`;

function MyFeed() {
  const [user, setUser] = useState({});

  const getUser = () => {
    const storageUser = localStorage.getItem('user');
    const localUser = JSON.parse(storageUser);
    setUser(localUser);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="Page">
      <div className="section1">
        <ImgPic src={ProfilePic} />
        <h2 className="MyFeedHeder">
          Hello
          {' '}
          {user.name}
        </h2>
        <div className="Buttons">
          <Button className="volunteerButton" as={Link} to="/createVolunteer">Comming Soon</Button>
          <Button className="volunteerButton" as={Link} to="/eventForm">Volunteers</Button>
        </div>
      </div>
      <div className="section2">
        {/* <EventsCalendar /> */}
        <RegisterList user={user} />
        <EventsContainer user={user} />
      </div>
    </div>
  );
}

export default MyFeed;
