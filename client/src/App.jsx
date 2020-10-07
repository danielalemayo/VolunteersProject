import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyFeed from './components/myFeed';
import NavBar from './components/Navbar/Navbar';
import SignUp from './pages/signUp';
import Login from './pages/login';
import GetUser from './components/GetUsers';
import './App.css';

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
  );
}

export default App;