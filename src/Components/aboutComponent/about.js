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

    componentDidMount() {
        this.setState({show: true})
    }




    // state = {
    //     show: false
    //   }
    
    //   onShow = ()=> {
    //     this.setState({ show: true })
    //   }
    
    //   onHide = ()=> {
    //     this.setState({ show: false })
    //   }
    
    
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

        <button
          type="button"
          onClick={this.onShow}>
          show
        </button>

        <button
          type="button"
          onClick={this.onHide}>
          hide
        </button>
    


    </div>
    
        );

    }

}

export default AboutPage;