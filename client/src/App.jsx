import React from 'react';
// import Navbar from './components/navbar/navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignUp, Login } from './components/pages';

import GetUser from './components/GetUsers'

function App() {
  return (
    <BrowserRouter>
      <GetUser />
      <Switch>
        <Route path="/page/login" exact component={Login} />
        <Route path="/page/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
