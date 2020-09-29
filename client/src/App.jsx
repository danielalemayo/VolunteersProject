import React from 'react';
import NavBar from './components/Navbar/Navbar'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { SignUp, Login } from './components/pages';
import './App.css';
import GetUser from './components/GetUsers'


function App() {
  return (
    <BrowserRouter>
     <NavBar/>
      <Switch>
        <Route path="/getusers" exact component={GetUser}/>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
