/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventsContainer from '../../components/EventsContainer/EventsContainer';
// import EventsCalendar from '../../components/eventsCalender/EventsCalendar';
import ProfilePic from '../../img/img_avatar.png';
import RegisterList from '../../components/registerVol-EventList/registerList';
import { useUser } from '../../providers/userContext';
import './myFeed.css';

const Button = styled.button`
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
  const { user } = useUser();
  return (
    <div className="myFeed-body">
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <ImgPic src={ProfilePic} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <div className="row">
                <div className="col-md-6">
                  <h4>Name</h4>
                </div>
                <div className="col-md-6">
                  <p>{user.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>Email</h4>
                </div>
                <div className="col-md-6">
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>Phone</h4>
                </div>
                <div className="col-md-6">
                  <p>{user.phone ? user.phone : 'None'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <Button type="button" className="volunteerButtons" as={Link} to="/createVolunteer">Comming Soon (Giv a Hand)</Button>
              <Button type="button" className="volunteerButtons" as={Link} to="/eventForm">Get Assistance</Button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="linkRow">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Regitered Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">All Events</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#myEvents" role="tab" aria-controls="profile" aria-selected="false">My Events</a>
                </li> */}
              </ul>
            </div>
            <div className="listContainer">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <RegisterList user={user} />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <EventsContainer user={user} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFeed;
