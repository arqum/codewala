import React, {Component} from 'react';
import Text_Cursor from "../Text_Cursor";


type
RotateStringProps = {
    stringToRotate: string,
    speedOfTyping: number,
    speedOfRemoving: number,
};

class RotateString extends Component<RotateString> {
    // static defaultProps = {
    //     speedOfTyping: 200,
    //     speedOfRemoving: 50,
    // };
    charLoopingInterval;
    charEraseInterval;

    constructor(props) {
        super(props);
        this.state = {
            charToRotate: '',
        };
        this._loopCharForward = this._loopCharForward.bind(this);
        this._loopCharErase = this._loopCharErase.bind(this);
    }

    componentDidMount() {
        const {stringToRotate} = this.props;
        setTimeout(()=>{
            this._loopCharForward(stringToRotate)
        }, 2000);

    }

    componentWillReceiveProps(nextProps) {
        const {stringToRotate} = this.props;
        const {stringToRotate: nextStringToRotate} = nextProps;
        if (stringToRotate !== nextStringToRotate) {
            clearInterval(this.charEraseInterval);
            clearInterval(this.charLoopingInterval);
            this._loopCharErase(this.state.charToRotate).then(()=>{
                this._loopCharForward(nextStringToRotate);
            });

        }
    }

    _loopCharForward(text: string) {
        const char = text.split("");
        this.charLoopingInterval = setInterval(() => {
            if (char.length <= 0) {
                clearInterval(this.charLoopingInterval);
            } else {
                this.setState({charToRotate: this.state.charToRotate + char.shift()})
            }

        }, 400);
    }

    _loopCharErase(text) {
        let char = text.split("");
        return new Promise((resolve) => {
            this.charEraseInterval = setInterval(() => {
                if (char.length <= 0) {
                    clearInterval(this.charEraseInterval);
                    resolve();
                } else {
                    char.pop();
                    const resultString = char.join('');
                    this.setState({charToRotate: resultString});
                }
            }, 200);
        });

    }

    render() {
        const {charToRotate} = this.state;
        return (
            <Text_Cursor
                string={charToRotate}
            />
        )
    }
}

export default RotateString