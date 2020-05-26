import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
    constructor() {
        super()
        this.inputComponentRef = React.createRef();
    }

    clickHandler = () => {
        this.inputComponentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.inputComponentRef} />
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }

}

export default FocusInput