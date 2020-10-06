import React from 'react';
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
      </Switch>
    </BrowserRouter>
  );
}

// import CUser from './user/SingUp';

// function App() {
//   return (
//     <CUser />
//   );
// }

export default App;
