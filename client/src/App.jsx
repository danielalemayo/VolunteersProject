import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import SignUp from './pages/signUp';
import Login from './pages/login';
import GetUser from './components/GetUsers';
import LandingPage from './pages/landingpage/LandingPage'



// import GetStartedButton from './components/GetStartedButton'


import Myfeed from './pages/Myfeed/Myfeed';
// import EventForm from './pages/eventForm/eventForm';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/getUsers" exact component={GetUser} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/home" exact component={LandingPage} />
        <Route path="/" exact component={LandingPage} />

        <Route path="/myFeed" exact component={Myfeed} />
        {/* <Route path="/eventForm" exact component={EventForm} /> */}
        {/*<Route path="/createEvent" exact component={} /> */}
        <Route path="*"><Redirect to="/" /></Route>

      </Switch>


    </BrowserRouter>

    
  );
}

export default App;