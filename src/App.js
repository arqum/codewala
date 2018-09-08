import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import './Assets/css/default.min.css';
import './Components/navigationComponent/mainNavigation';
import './Components/landingComponent/landinPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainNavigation from './Components/navigationComponent/mainNavigation';
import LandingPage from './Components/landingComponent/landinPage';
import AboutPage from './Components/aboutComponent/about';
import ErrorPage from './Components/ErrorComponent/errorPage';



class App extends Component {
  render() {
    return (

      
    <div className="App">
     
     <BrowserRouter>
     <div>
     <MainNavigation/>
     <LandingPage/>
     <Switch>
     <Route path="/" component={LandingPage} exact />
     <Route path="/about" component={AboutPage} />
     <Route component={ErrorPage} /> 
     </Switch>
     


     </div>
     
     
     </BrowserRouter>
      </div>

     
      
    );
  }
}

export default App;
