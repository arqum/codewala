import React, {Component} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';


class AboutPage extends Component {

    constructor(){
        super()
        this.state = ({show:true})
    }

    componentWillMount() {
        this.setState({show: true})
    }
    componentDidMount() {
        $('body').css('background','white');
        this.setState({show: true})
    }
    
    render() {
        return(
    <div>
       
        <h1>
           about page
        </h1>

        <Loading className="loading"
          show={this.state.show}
          color="#54d5cd"
          showSpinner={false}
        />

    </div>
    
        );

    }

}

export default AboutPage;