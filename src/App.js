import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import './Assets/css/default.min.css';
import './Components/navigationComponent/mainNavigation';
import './Components/landingComponent/landinPage';

import MainNavigation from './Components/navigationComponent/mainNavigation';
import LandingPage from './Components/landingComponent/landinPage';

class App extends Component {
  render() {
    return (
      <div className="App">
     <LandingPage/>

      </div>
    );
  }
}

export default App;
