import React, {Component} from 'react';
import Text_Cursor from "../Text_Cursor";


type RotateStringProps = {
    stringToRotate:string,
    speedOfTyping:number,
};

class RotateString extends Component<RotateString> {
    constructor(props) {
        super(props);
        this.state = {
            stringToRotate: '',
            currentIndex:0,
        }
    }

    componentDidMount(){

    }

    render() {
        const {stringToRotate} = this.state;
        return (
            <Text_Cursor
                string:{stringToRotate}
            />
        )
    }
}