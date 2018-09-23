import React, {Component} from 'react';
import $ from 'jquery';


class Cursor extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount = ()=>{
        const {cursorColor} = this.props;
    

        $(document).mousemove(function (e) {
        
        //cursor ball
        var mX = e.pageX;
        var mY = e.pageY;
        $(document).bind('mousemove', function (e) {
            $('#cursor').css({
                left: e.pageX + 1,
                top: e.pageY
            });
        });

    });

    
    $('.navlinks').hover(function () {
        $('#cursor').css({
            'width': '60px',
            'height': "60px",
            'background-color': "rgba(84, 213, 205, 0.4)",
            

        });
    });
    $('.navlinks').mouseleave(function () {
        $('#cursor').css({
            'width': '20px',
            'height': "20px",
            'background-color': "rgba(84, 213, 205, 0.4)",


        });
    });

    }

    render() {

        return(
        <div className="custom_container">
             <div id="cursor"><span className="lnr lnr-menu"></span></div>
        </div>
    


        );}



}

export default Cursor;