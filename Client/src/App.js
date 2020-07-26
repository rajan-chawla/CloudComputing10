import React, { useState } from 'react';
import './App.css';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Ocrtext from "./components/Ocrtext";
import Home from "./components/Home";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState({ FileType: "", FileContent: "" });

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Ocrtext" component={Ocrtext} />
        </Switch>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;
