import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MyFeed from './components/myFeed'
// import logo from './logo.svg';
// import './App.css';
// import routUser from './../../routes/api/users'
// const routUser = require('./../../routes/api/users')
function App() {
  return (
    <BrowserRouter>
    <MyFeed/>
    </BrowserRouter>
    
    
  )}
export default App;
