import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import SignUp from './pages/signUp';
import Login from './pages/login';
import GetUser from './components/GetUsers';
import MyFeed from './pages/Myfeed/Myfeed';
import logo from './img/LightBackLogo.png';



// import GetStartedButton from './components/GetStartedButton'

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
     <img classname="Logo" src={logo} alt="logo" />
      {/* <Button variant="primary" size="lg" active>
        Primary button
       </Button>{' '} */}


    </BrowserRouter>
  );
}

export default App;