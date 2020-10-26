import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
// Components/ Pages
import NavBar from './components/Navbar/Navbar';
import SignUp from './pages/signUp';
import Login from './pages/login';
import LandingPage from './pages/landingpage/LandingPage'
import Footer from './components/Footer/Footer'
import MyFeed from './pages/Myfeed/Myfeed';

import EventForm from './pages/eventForm/eventForm';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/myFeed" exact component={MyFeed} />
        <Route path="/eventForm" exact component={EventForm} />
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
      <Footer/>


    </BrowserRouter>
  );
}

export default App;
