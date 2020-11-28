import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/component';
import Home from './components/Home/component';
import Archive from './components/Archive/component';
import Footer from './components/Footer/component';

const App = () => (
  <div>
    <Header />
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/archive" component={Archive}/>
        </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
