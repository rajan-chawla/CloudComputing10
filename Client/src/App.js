import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ocrtext from "./components/ocrtext";

function App() {
  return (
    <div className="App">
      <header className="">
        <div> Hello Cloud Computing team</div>
        <Router>
          <Switch>
            <Route path="/ocrtext" component={ocrtext} />
          </Switch>
        </Router>
      </header>

    </div>
  );
}

export default App;
