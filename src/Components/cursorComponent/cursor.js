import React, {Component} from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

class Cursor extends Component {

    componentDidMount = ()=>{
// make cursor bigger on links
$('a').hover(function () {
    $('#cursor').css({
        'width': '60px',
        'height': "60px",
        'background-color': "rgba(135, 227, 221, 0.3)",




    });
});
$('a').mouseleave(function () {
    $('#cursor').css({
        'width': '20px',
        'height': "20px",
        'background-color': "rgba(255, 255, 255, 0.5)"

    });
});




    }

    render() {

        return(
        <div>
             <div id="cursor"><span className="lnr lnr-menu"></span></div>
        </div>
    


        );}



}

export default Cursor;