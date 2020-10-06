import React from 'react';
import MyFeed from './components/myFeed';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
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
  );

}
export default App;