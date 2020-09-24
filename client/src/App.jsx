import React from 'react';
// import Navbar from './components/navbar/navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {SignUp,Login} from './components/pages';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import SignUp from './components/pages/signUp'
// import GetUser from './components/'
function App() { 
return(
    // <SignUp/>
     <BrowserRouter>
     {/* <Navbar /> */}
    <Switch>
       <Route path="/page/login" exact component={Login}/>
      <Route path="/page/signup" exact component={SignUp}/>
    </Switch>
    </BrowserRouter>
)
}
export default App;
