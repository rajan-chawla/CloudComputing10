import React, {useState}  from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './Signup';
import LeftPane from './LeftPane';
import Login from './Login';

function Home() {

  return (
    <div className="Home">
        {window.localStorage.getItem("userid")===null?
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
      </div>:
        window.location.replace("/ocrtext")}
    </div>
  );
}

export default Home;
