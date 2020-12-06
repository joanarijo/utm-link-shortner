import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/scss/app.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/component';
import Home from './components/Home/component';
import Archive from './components/Archive/component';
import Footer from './components/Footer/component';

function App() {

const [list, setList] = useState([]);
   
useEffect(() => {
  async function fetchList() {
    const request = await axios.get('/api/archive');
    setList(request.data.url);
    return request;
  }
  fetchList();

}, []);

console.log(list);


  return (
  <React.Fragment>
    <Header />
    <Router>
        <Switch>
          <Route path="/" exact component={() => <Home list={list} />} />
          <Route path="/archive" component={() => <Archive list={list} />} />
        </Switch>
    </Router>
    <Footer />
  </React.Fragment>
  );
}

export default App;