import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import SignUp from './pages/signUp';
import Login from './pages/login';
import GetUser from './components/GetUsers';
import Myfeed from './pages/Myfeed/Myfeed';
import CreateVolunteer from './pages/createVolunteer/createVolunteer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/getUsers" exact component={GetUser} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/myFeed" exact component={Myfeed} />
        <Route path="/createVolunteer" exact component={CreateVolunteer} />
        {/*<Route path="/createEvent" exact component={} /> */}
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;