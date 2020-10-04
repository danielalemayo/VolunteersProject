import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import { SignUp, Login } from './pages';
import './App.css';
import GetUser from './components/GetUsers';
import Myfeed from './pages/Myfeed/Myfeed';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/getUsers" exact component={GetUser} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/myFeed" exact component={Myfeed} />
        {/* <Route path="/createVolunteer" exact component={} />
        <Route path="/createEvent" exact component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
