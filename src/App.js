import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomeComponent from './components/homeComponent/';
import HeaderComponent from './components/headerComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderComponent></HeaderComponent>
          <Route exact path='/' component={HomeComponent}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
