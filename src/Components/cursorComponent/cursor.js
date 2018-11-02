import React, {Component} from 'react';
import $ from 'jquery';


type CursorProps = {
    color: string,
    size: string
};

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
            'background-color': "rgba(84, 213, 205, 0.7)",
            

        });
    });

    $('.hollow-circle').hover(function () {
        $('#cursor').css({
            'width': '5px',
            'height': "5px",
            'background-color': "rgba(84, 213, 205, 0.7)",
        });
    });

 

    $('.navlinks, .hollow-circle').mouseleave(function () {
        $('#cursor').css({
            'width': '10px',
            'height': "10px",
            'background-color': "rgba(84, 213, 205, 0.7)",


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