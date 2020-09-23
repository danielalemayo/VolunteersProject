import React from "react";
import EventsContainer from "../../EventsContainer/EventsContainer";
import './myFeed.css'

function MyFeed() {
  return (
    <div className="Page" >
      {/* <Pic/> */}
      {/* <ActivityLog/> */}
      <div >Picture</div>
      <div >Activity</div>
      <EventsContainer />
    </div>
  );
}

export default MyFeed;
