import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyFeed from './components/myFeed';
import NavBar from './components/Navbar/Navbar';
import { SignUp, Login } from './pages';
import './App.css';
import GetUser from './components/GetUsers';
import CarouselPhotos from './components/CarouselPhotos';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CarouselPhotos />
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
