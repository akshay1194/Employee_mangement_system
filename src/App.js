import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderCompontent from "./components/HeaderCompontent";
import FooterCompontent from "./components/FooterCompontent";
import CreateEmployeeCompontent from "./components/CreateEmployeeCompontent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <div >
            <HeaderCompontent />
                <div className="container">
                  <Switch>
                    <Route path="/" exact component={ListEmployeeComponent}></Route>
                    <Route path="/employees" component={ListEmployeeComponent}></Route>
                    <Route path="/add-employee:id" component={CreateEmployeeCompontent}></Route>
                    
                  </Switch>
                </div>
            <FooterCompontent />
        </div>
      </Router>
    </div>
  );
}

export default App;
