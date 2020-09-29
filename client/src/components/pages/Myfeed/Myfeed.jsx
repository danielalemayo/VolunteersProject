import React from "react";
import EventsContainer from "../../EventsContainer/EventsContainer";
import styled, { css } from 'styled-components';
import './myFeed.css'
import { Link } from 'react-router-dom'

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  text-align: center;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 10rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-decoration: none;
  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`
const ImgPic = styled.img`
 margin-top: 5px;
    border: 2px solid rgb(251, 220, 161);
    width: 80px;
    height: 100px;
`

function MyFeed() {
  return (
    <div >
      <div className="section1">
        <ImgPic />
        
        <h2 className="MyFeedHeder">My Feed</h2>
        <div className="Buttons">
          <Button as={Link} href="/api/events/createVolunteer">בוא תן יד</Button>
          <Button as={Link} href="/api/events/askVolunteer"> ? צריך מתנדברים </Button>
        </div>
      </div>
      <div className="section2">
        <div className="Activity">Activity</div>
        <EventsContainer  />
      </div>
    </div>
  );
}

export default MyFeed;
