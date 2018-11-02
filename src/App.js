import React, { Component } from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import './Assets/css/default.min.css';
import './Components/navigationComponent/mainNavigation';
import './Components/landingComponent/landinPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./Assets/scss/animate.css";


import MainNavigation from './Components/navigationComponent/mainNavigation';
import LandingPage from './Components/landingComponent/landinPage';
import AboutPage from './Components/aboutComponent/about';
import ErrorPage from './Components/ErrorComponent/errorPage';
import PhilosophyPage from './Components/philosophyComponent/philosophy';
import HirePage from './Components/hireComponent/hire';
import WorkPage from './Components/WorkComponent/work';






class App extends Component {
  render() {
    return (

      
    <div className="App">
     
     <BrowserRouter>
     <div>
     <MainNavigation/>
     <Switch>
     <Route path="/" component={LandingPage} exact />
     <Route path="/about" component={AboutPage} />
     <Route path="/work" component={WorkPage} />
     <Route path="/philosophy" component={PhilosophyPage} />
     <Route path="/hire" component={HirePage} />
     <Route component={ErrorPage} /> 
     </Switch>
     


     </div>
     
     
     </BrowserRouter>
      </div>

     
      
    );
  }
}

export default App;
