import React from 'react';
import './App.css';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Header from './components/Header';
import LeftPane from './components/LeftPane';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
       <Router>
            <Switch>
            <Header />
            </Switch>
          </Router>
      <div class="modal-body row">
        <div class="col-md-6">
          <LeftPane />
        </div>
        <div class="col-md-3">
        <Login/>
        </div>
        <div class="col-md-3">
          <Signup/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
