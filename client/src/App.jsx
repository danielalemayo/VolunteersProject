<<<<<<< HEAD
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
//  Link
} from "react-router-dom";
import "./App.css";
import MyFeed from "./components/pages/Myfeed/Myfeed";



function App() {
  return (
    <Router>
      
      <Switch>
        <Route  component={MyFeed}/>
      </Switch>
      {/* <Route path="/api/myFeed" exact component={MyFeed}></Route> */}
      {/* <MyFeed/> */}
    </Router>
=======
import React from 'react';
import MyFeed from './components/myFeed';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import { SignUp, Login } from './pages';
import './App.css';
import GetUser from './components/GetUsers';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/getUsers" exact component={GetUser} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/myFeed" exact component={MyFeed} />
      </Switch>
    </BrowserRouter>
>>>>>>> master
  );
}
export default App;
