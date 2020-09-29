import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import './App.css';
import GetUser from './components/GetUsers';
import { SignUp, Login } from './pages';
import MyFeed from './pages/Myfeed/Myfeed';

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
