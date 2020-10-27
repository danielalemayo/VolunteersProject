import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import EventsContainer from '../../components/EventsContainer/EventsContainer';
import EventsCalendar from '../../components/eventsCalender/EventsCalendar';
import ProfilePic from '../../img/img_avatar.png';
import RegisterList from '../../components/registerVol-EventList/registerList';
import './myFeed.css';

const Button = styled.a`
text-align: center;

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
    <div className="myFeed-body">
      <div class="container emp-profile">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <ImgPic src={ProfilePic} />
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
               <h5>Hello {user.name}</h5>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>WORK LINK</p>
              <Button className="volunteerButton" as={Link} to="/createVolunteer">Giv a Hand</Button>
              <Button className="volunteerButton" as={Link} to="/eventForm">Need volunteers ?</Button>
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>full name</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>mail</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>phone namer</p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div class="row">
                    <div class="col-md-6">
                      <EventsCalendar />
                      <EventsContainer user={user} />
                      <RegisterList user={user} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div >
    // <div className="section2">
    //   <EventsCalendar />
    //   <RegisterList user={user} />
    //   <EventsContainer user={user} />
    // </div>
    // </div >
  );
}

export default MyFeed;
