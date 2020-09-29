import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
//  Link
} from "react-router-dom";
import "./App.css";
import MyFeed from "./components/pages/Myfeed/Myfeed";



function App() {
  return (
    <Router>
      
      <Switch>
        <Route  component={MyFeed}/>
      </Switch>
      {/* <Route path="/api/myFeed" exact component={MyFeed}></Route> */}
      {/* <MyFeed/> */}
    </Router>
  );
}
export default App;
